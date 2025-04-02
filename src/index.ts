import express from "express";
import { setupSwagger } from "./swagger";
import { accountRouter } from "./routes";
import { AppDataSource } from "./data-source";

const app = express();
app.use(express.json());

setupSwagger(app);

app.use(accountRouter);

const PORT = process.env.PORT || 3000;

AppDataSource.initialize()
  .then(async () => app.listen(PORT, () => console.log(`Server running on port ${PORT}`)))
  .catch((error) => console.error("Database connection error:", error));

