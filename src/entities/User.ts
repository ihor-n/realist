import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm";

@Entity()
export default class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  email: string;

  @Column()
  fullName: string;

  @Column()
  dateOfBirth: Date;

  @Column()
  phoneNumber: string;

  @Column()
  address: string;

  @Column()
  country: string;

  @Column({ nullable: true })
  taxId: string;

  @Column({ nullable: true })
  governmentIdType: string;

  @Column({ nullable: true })
  governmentIdNumber: string;

  @Column({ nullable: true })
  proofOfAddressUrl: string;

  @Column({ default: "pending" })
  kycStatus: string;

  @Column({ default: false })
  pepStatus: boolean;

  @Column({ nullable: true })
  riskTolerance: string;

  @Column({ nullable: true })
  investmentExperience: string;

  @Column({ nullable: true })
  wealthKernelCustomerId: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}

/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       required:
 *         - email
 *         - fullName
 *         - dateOfBirth
 *         - phoneNumber
 *         - address
 *         - country
 *         - kycStatus
 *         - pepStatus
 *       properties:
 *         id:
 *           type: integer
 *           description: Unique identifier for the user
 *           example: 1
 *         email:
 *           type: string
 *           format: email
 *           description: User's email address (must be unique)
 *           example: "user@example.com"
 *         fullName:
 *           type: string
 *           description: Full name of the user
 *           example: "John Doe"
 *         dateOfBirth:
 *           type: string
 *           format: date
 *           description: User's date of birth (YYYY-MM-DD)
 *           example: "1990-05-15"
 *         phoneNumber:
 *           type: string
 *           description: User's phone number
 *           example: "+44 7700 900123"
 *         address:
 *           type: string
 *           description: Residential address of the user
 *           example: "221B Baker Street, London, UK"
 *         country:
 *           type: string
 *           description: Country of residence
 *           example: "United Kingdom"
 *         taxId:
 *           type: string
 *           nullable: true
 *           description: Tax identification number (if applicable)
 *           example: "AB123456C"
 *         governmentIdType:
 *           type: string
 *           enum: [passport, national_id, driver_license]
 *           nullable: true
 *           description: Type of government-issued ID provided
 *           example: "passport"
 *         governmentIdNumber:
 *           type: string
 *           nullable: true
 *           description: Government-issued ID number
 *           example: "A12345678"
 *         proofOfAddressUrl:
 *           type: string
 *           format: uri
 *           nullable: true
 *           description: URL to the proof of address document (e.g., S3 link)
 *           example: "https://s3.amazonaws.com/bucket/proof-of-address.pdf"
 *         kycStatus:
 *           type: string
 *           enum: [pending, verified, rejected]
 *           description: KYC verification status
 *           example: "verified"
 *         pepStatus:
 *           type: boolean
 *           description: Indicates if the user is a Politically Exposed Person (PEP)
 *           example: false
 *         riskTolerance:
 *           type: string
 *           enum: [low, medium, high]
 *           nullable: true
 *           description: User's risk tolerance level
 *           example: "medium"
 *         investmentExperience:
 *           type: string
 *           enum: [beginner, intermediate, advanced]
 *           nullable: true
 *           description: User's investment experience level
 *           example: "intermediate"
 *         wealthKernelCustomerId:
 *           type: string
 *           nullable: true
 *           description: External ID for the user in WealthKernel API
 *           example: "WKUSER123456"
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: Timestamp when the user was created
 *           example: "2024-03-30T12:00:00Z"
 *         updatedAt:
 *           type: string
 *           format: date-time
 *           description: Timestamp when the user was last updated
 *           example: "2024-04-01T15:30:00Z"
 */
