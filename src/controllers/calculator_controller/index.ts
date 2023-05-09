import { NextFunction, Request, Response } from "express";
import {
  division,
  multiply,
  substract,
  sum,
} from "../../helpers/mathOperations";
import { NumberValidator } from "../../validators/numberValidator";
import { BaseController } from "../base_controller";
import { CalculatorService } from "./calculator.service";
import { HttpError } from "../../exception-filter";

export class CalculatorController extends BaseController {
  constructor() {
    super();
    this.addRouter([
      {
        url: "/sum",
        method: "get",
        handler: this.sum,
        middlewares: [new NumberValidator().validate],
      },
      {
        url: "/substract",
        method: "get",
        handler: this.substract,
        middlewares: [new NumberValidator().validate],
      },
      {
        url: "/multiply",
        method: "get",
        handler: this.multiply,
        middlewares: [new NumberValidator().validate],
      },
      {
        url: "/divide",
        method: "get",
        handler: this.divide,
        middlewares: [new NumberValidator().validate],
      },
    ]);
  }

  sum(
    { query }: Request<any, any, { a: string; b: string }>,
    res: Response,
    next: NextFunction
  ) {
    const sum = new CalculatorService(query.a, query.b);
    res.status(200).json({ result: sum.getSum(), statusCode: 200 });
  }
  substract(
    { query }: Request<any, any, { a: string; b: string }>,
    res: Response,
    next: NextFunction
  ) {
    const substract = new CalculatorService(query.a, query.b);
    res.status(200).json({ result: substract.getSubstract(), statusCode: 200 });
  }
  multiply(
    { query }: Request<any, any, { a: string; b: string }>,
    res: Response,
    next: NextFunction
  ) {
    const multiply = new CalculatorService(query.a, query.b);
    res.status(200).json({ result: multiply.getMultiply(), statusCode: 200 });
  }
  divide(
    { query }: Request<any, any, { a: string; b: string }>,
    res: Response,
    next: NextFunction
  ) {
    if (query && query.b === "0") {
      res.status(500).json(new HttpError(500, "Can not divide to 0").toJSON());
    } else {
      const division = new CalculatorService(query.a, query.b);
      res.status(200).json({ result: division.getDivision(), statusCode: 200 });
    }
  }
}
