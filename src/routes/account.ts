import express from 'express';
import { validateAccountCreation } from '../validations';
import { openAccount } from '../controllers';

const router = express.Router();

/**
 * @swagger
 * /accounts/open:
 *   post:
 *     summary: Open a new investment account
 *     description: Creates an investment account by integrating with the WealthKernel API.
 *     tags: [Accounts]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               userId:
 *                 type: integer
 *                 description: The ID of the user requesting the account creation
 *                 example: 123
 *               accountType:
 *                 type: string
 *                 description: The type of the account being created (e.g., "investment", "retirement")
 *                 example: "investment"
 *     responses:
 *       '201':
 *         description: Investment account created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   example: 1
 *                 userId:
 *                   type: integer
 *                   example: 123
 *                 wealthkernelAccountId:
 *                   type: string
 *                   example: "WK123456"
 *                 accountType:
 *                   type: string
 *                   example: "investment"
 *                 balance:
 *                   type: number
 *                   format: float
 *                   example: 0.00
 *                 createdAt:
 *                   type: string
 *                   format: date-time
 *                   example: "2025-04-02T12:00:00Z"
 *                 updatedAt:
 *                   type: string
 *                   format: date-time
 *                   example: "2025-04-02T12:00:00Z"
 *       '400':
 *         description: Validation error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 errors:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       msg:
 *                         type: string
 *                         example: "User ID must be an integer"
 *                       param:
 *                         type: string
 *                         example: "userId"
 *                       location:
 *                         type: string
 *                         example: "body"
 *       '404':
 *         description: User not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "User not found"
 *       '500':
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Internal server error"
 */
router.post('/accounts/open', validateAccountCreation, openAccount as any);

export default router;