import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToOne, JoinColumn } from "typeorm";
import User from "./User";

@Entity()
export default class Account {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => User, { cascade: true })
  @JoinColumn()
  user: User;

  @Column({ unique: true })
  wealthkernelAccountId: string;

  @Column({ type: "text" })
  accountType: string;

  @Column("decimal", { precision: 12, scale: 2, default: 0 })
  balance: number;

  @Column({ type: "text", default: "GBP" })
  currency: string;

  @Column({ type: "text", default: "pending" })
  status: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}

/**
 * @swagger
 * components:
 *   schemas:
 *     Account:
 *       type: object
 *       required:
 *         - userId
 *         - wealthkernelAccountId
 *         - accountType
 *         - balance
 *         - currency
 *         - status
 *       properties:
 *         id:
 *           type: integer
 *           example: 1
 *         userId:
 *           type: integer
 *           description: ID of the user who owns the account
 *           example: 123
 *         wealthkernelAccountId:
 *           type: string
 *           description: External WealthKernel account identifier
 *           example: "WK123456"
 *         accountType:
 *           type: string
 *           enum: [GIA, ISA, SIPP]
 *           description: Type of investment account
 *           example: "GIA"
 *         balance:
 *           type: number
 *           format: decimal
 *           description: Current balance of the account
 *           example: 1000.00
 *         currency:
 *           type: string
 *           enum: [GBP, USD, EUR]
 *           description: Currency of the account
 *           example: "GBP"
 *         status:
 *           type: string
 *           enum: [pending, active, closed, suspended]
 *           description: Current status of the account
 *           example: "active"
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: Timestamp when the account was created
 *           example: "2024-03-30T12:00:00Z"
 *         updatedAt:
 *           type: string
 *           format: date-time
 *           description: Timestamp when the account was last updated
 *           example: "2024-04-01T15:30:00Z"
 */
