import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
} from "typeorm";
import Account from "./Account";

@Entity()
export default class TradeOrder {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Account, (account) => account.id)
  account: Account;

  @Column()
  orderType: string;

  @Column({ nullable: true })
  instrumentId: string;

  @Column("decimal", { precision: 12, scale: 6 })
  quantity: number;

  @Column("decimal", { precision: 12, scale: 2 })
  pricePerShare: number;

  @Column({ nullable: true })
  wealthkernelTradeId: string;

  @Column({ default: "pending" })
  status: string;

  @Column({ nullable: true })
  settlementDate: Date;

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
 *     TradeOrder:
 *       type: object
 *       required:
 *         - accountId
 *         - orderType
 *         - instrumentId
 *         - quantity
 *         - pricePerShare
 *       properties:
 *         id:
 *           type: integer
 *           description: Unique identifier for the trade order
 *           example: 1
 *         accountId:
 *           type: integer
 *           description: Associated investment account ID
 *           example: 123
 *         orderType:
 *           type: string
 *           enum: [buy, sell]
 *           description: Type of trade order
 *           example: "buy"
 *         instrumentId:
 *           type: string
 *           description: The instrument being traded (e.g., stock ticker)
 *           example: "AAPL"
 *         quantity:
 *           type: number
 *           format: decimal
 *           description: Number of shares (supports fractional shares)
 *           example: 0.75
 *         pricePerShare:
 *           type: number
 *           format: decimal
 *           description: Price per share at the time of order
 *           example: 150.25
 *         wealthkernelTradeId:
 *           type: string
 *           nullable: true
 *           description: Reference trade ID from WealthKernel
 *           example: "WKTRADE987654"
 *         status:
 *           type: string
 *           enum: [pending, executed, failed, canceled]
 *           description: Current trade status
 *           example: "pending"
 *         settlementDate:
 *           type: string
 *           format: date
 *           nullable: true
 *           description: Expected settlement date (if applicable)
 *           example: "2024-04-05"
 *         failureReason:
 *           type: string
 *           nullable: true
 *           description: Explanation if the trade fails
 *           example: "Insufficient funds"
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: Timestamp when the trade order was created
 *           example: "2024-04-01T10:00:00Z"
 *         updatedAt:
 *           type: string
 *           format: date-time
 *           description: Timestamp when the trade order was last updated
 *           example: "2024-04-01T12:30:00Z"
 */
