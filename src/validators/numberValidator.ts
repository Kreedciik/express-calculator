import { NextFunction, Request, Response } from "express";
import { HttpError } from "../exception-filter";

export class NumberValidator {
  validate(
    { query }: Request<any, any, { a: string; b: string }>,
    res: Response,
    next: NextFunction
  ) {
    if (query && !!query.a && !!query.b) {
      if (!!+query.a || !!+query.b) {
        next();
      } else {
        res.status(500).json(new HttpError(500, "Values must be a number!!!"));
      }
    } else {
      res.status(500).json(new HttpError(500, "Wrong values!!!").toJSON());
    }
  }
}
