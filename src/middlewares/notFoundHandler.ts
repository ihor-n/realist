import { Request, Response, NextFunction } from "express";

export const notFoundHandler = (req: Request, res: Response, next: NextFunction) => {
  if (req.path.startsWith("/api-docs")) {
    return next();
  }
  res.status(404).json({ error: "Route not found" });
};
