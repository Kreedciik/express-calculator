import { NextFunction, Request, Response, Router } from "express";

export interface IRoute {
  method: keyof Pick<Router, "get" | "post" | "delete" | "put" | "patch">;
  url: string;
  handler: (req: Request, res: Response, next: NextFunction) => void;
  middlewares?: any[];
}
