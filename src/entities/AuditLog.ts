import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
} from "typeorm";

@Entity()
export default class AuditLog {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  action: string;

  @Column({ type: "json", nullable: true })
  details: any;

  @Column()
  performedBy: string;

  @Column({ nullable: true })
  entityId: number;

  @Column({ nullable: true })
  entityType: string;

  @CreateDateColumn()
  createdAt: Date;
}

/**
 * @swagger
 * components:
 *   schemas:
 *     AuditLog:
 *       type: object
 *       required:
 *         - action
 *         - performedBy
 *       properties:
 *         id:
 *           type: integer
 *           description: Unique identifier for the audit log
 *           example: 1
 *         action:
 *           type: string
 *           description: The action that was logged
 *           example: "KYC_APPROVED"
 *         details:
 *           type: object
 *           nullable: true
 *           description: Additional metadata related to the event
 *           example: { "userId": 123, "reason": "KYC verified" }
 *         performedBy:
 *           type: string
 *           description: Who performed the action (e.g., "system", "admin", "user")
 *           example: "system"
 *         entityId:
 *           type: integer
 *           nullable: true
 *           description: ID of the affected entity (User, Account, Trade, etc.)
 *           example: 123
 *         entityType:
 *           type: string
 *           nullable: true
 *           description: Type of entity affected by this action (User, Account, TradeOrder, etc.)
 *           example: "User"
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: Timestamp when the log entry was created
 *           example: "2024-04-01T10:00:00Z"
 */
