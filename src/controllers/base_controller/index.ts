import express, { Router } from "express";
import { IRoute } from "./base.controller.interface";

export abstract class BaseController {
  private router: Router;
  constructor() {
    this.router = express.Router();
  }

  public addRouter(routes: IRoute[]) {
    routes.forEach((route) => {
      const handler = route?.middlewares
        ? [...route.middlewares, route.handler]
        : [route.handler];
      this.router[route.method](route.url, handler);
    });
  }

  public getRouter() {
    return this.router;
  }
}
