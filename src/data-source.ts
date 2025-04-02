import "reflect-metadata";
import { DataSource } from "typeorm";
import { Account, User, Transaction, TradeOrder, AuditLog } from "./entities";

export const AppDataSource = new DataSource({
  type: "sqlite",
  database: "database.sqlite",
  entities: [User, Account, Transaction, TradeOrder, AuditLog],
  synchronize: true,
  logging: true,
});
