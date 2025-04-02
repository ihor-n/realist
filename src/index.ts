import express from "express";
import { setupSwagger } from "./swagger";
import { accountRouter } from "./routes";
import { AppDataSource } from "./data-source";
import { errorHandler } from "./middlewares/errorHandler";
import { ENV } from "../config/env";
import logger from "./utils/logger";

const app = express();
app.use(express.json());

setupSwagger(app);

app.use(accountRouter);

app.use((req, res, next) => {
  if (req.path.startsWith("/api-docs")) {
    return next();
  }
  res.status(404).json({ error: "Route not found" });
});

app.use(errorHandler);

AppDataSource.initialize()
  .then(async () => app.listen(ENV.PORT, () => logger.info(`Server running on port ${ENV.PORT}`)))
  .catch((error) => logger.error(error));

export default app;
