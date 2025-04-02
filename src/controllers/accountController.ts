import { Request, Response } from "express";
import { Account, User } from "../entities";
import { AppDataSource } from "../data-source";
import { createWealthKernelAccount, getAccessToken } from "../services";
import { validationResult } from "express-validator";
import logger from "../utils/logger";

// Utility function to validate the user input
const validateUserExists = async (userId: number) => {
  const userRepo = AppDataSource.getRepository(User);
  const user = await userRepo.findOne({ where: { id: userId } });
  if (!user) {
    throw new Error("User not found");
  }
  return user;
};

// Function to obtain an access token
const fetchAccessToken = async () => {
  try {
    const accessToken = await getAccessToken();
    return accessToken;
  } catch (error) {
    throw new Error("Failed to fetch access token");
  }
};

// Function to save the new account to the database
const saveAccountToDatabase = async (
  user: User,
  accountType: string,
  wealthkernelAccountId: string,
) => {
  const accountRepo = AppDataSource.getRepository(Account);
  const newAccount = new Account();
  newAccount.user = user;
  newAccount.wealthkernelAccountId = wealthkernelAccountId;
  newAccount.accountType = accountType;
  newAccount.balance = 0;

  await accountRepo.save(newAccount);
  return newAccount;
};

// Main controller function to open an account
export const openAccount = async (
  req: Request,
  res: Response,
): Promise<Response> => {
  // Validate request payload
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { userId, accountType } = req.body;

  try {
    // Validate and fetch the user
    const user = await validateUserExists(userId);

    // Fetch access token for the WealthKernel API
    const accessToken = await fetchAccessToken();

    // Create the account in WealthKernel API
    const wkAccountData = await createWealthKernelAccount(
      user,
      accountType,
      accessToken,
    );

    // Save the new account to the database
    const newAccount = await saveAccountToDatabase(
      user,
      accountType,
      wkAccountData.id,
    );

    // Return the created account
    return res.status(201).json(newAccount);
  } catch (error) {
    logger.error(error instanceof Error ? error.message : "Internal server error");
    
    return res
      .status(500)
      .json({ error: error instanceof Error ? error.message : "Internal server error" });
  }
};

export default openAccount;
