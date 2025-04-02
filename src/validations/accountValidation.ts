import { body } from "express-validator";

const validateAccountCreation = [
  body("userId").isInt().withMessage("User ID must be an integer"),
  body("accountType").isString().withMessage("Account type must be a string"),
];

export default validateAccountCreation;
