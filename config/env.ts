import dotenv from "dotenv-safe";

dotenv.config({
  allowEmptyValues: false,
  example: ".env.example",
});

export const ENV = {
  PORT: process.env.PORT || 3000,
  WK_CLIENT_ID: process.env.WK_CLIENT_ID!,
  WK_CLIENT_SECRET: process.env.WK_CLIENT_SECRET!,
};