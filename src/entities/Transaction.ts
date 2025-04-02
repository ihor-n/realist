import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne } from "typeorm";
import Account from "./Account";

@Entity()
export default class Transaction {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Account, account => account.id)
  account: Account;

  @Column()
  type: string;

  @Column("decimal", { precision: 12, scale: 2 })
  amount: number;

  @Column()
  currency: string;

  @Column({ nullable: true })
  wealthkernelTransactionId: string;

  @Column({ default: "pending" })
  status: string;

  @Column({ nullable: true })
  failureReason: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}

/**
 * @swagger
 * components:
 *   schemas:
 *     Transaction:
 *       type: object
 *       required:
 *         - accountId
 *         - type
 *         - amount
 *         - currency
 *       properties:
 *         id:
 *           type: integer
 *           description: Unique identifier for the transaction
 *           example: 1
 *         accountId:
 *           type: integer
 *           description: Associated investment account ID
 *           example: 123
 *         type:
 *           type: string
 *           enum: [deposit, withdrawal, trade]
 *           description: Type of transaction
 *           example: "deposit"
 *         amount:
 *           type: number
 *           format: decimal
 *           description: Transaction amount
 *           example: 1500.50
 *         currency:
 *           type: string
 *           description: Currency of the transaction
 *           example: "USD"
 *         wealthkernelTransactionId:
 *           type: string
 *           nullable: true
 *           description: Reference transaction ID from WealthKernel
 *           example: "WKT123456"
 *         status:
 *           type: string
 *           enum: [pending, completed, failed]
 *           description: Current status of the transaction
 *           example: "completed"
 *         failureReason:
 *           type: string
 *           nullable: true
 *           description: Reason for failure, if applicable
 *           example: "Insufficient funds"
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: Timestamp when the transaction was created
 *           example: "2024-04-01T10:00:00Z"
 *         updatedAt:
 *           type: string
 *           format: date-time
 *           description: Timestamp when the transaction was last updated
 *           example: "2024-04-01T12:30:00Z"
 */
