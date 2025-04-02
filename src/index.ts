import express from "express";
import { setupSwagger } from "./swagger";
import { accountRouter } from "./routes";
import { AppDataSource } from "./data-source";
import { errorHandler } from "./middlewares/errorHandler";
import { notFoundHandler } from "./middlewares/notFoundHandler";
import { ENV } from "../config/env";
import logger from "./utils/logger";

const app = express();
app.use(express.json());

setupSwagger(app);

app.use(accountRouter);

app.use(notFoundHandler);
app.use(errorHandler);

AppDataSource.initialize()
  .then(async () =>
    app.listen(ENV.PORT, () =>
      logger.info(`Server running on port ${ENV.PORT}`),
    ),
  )
  .catch((error) => logger.error(error));

export default app;
