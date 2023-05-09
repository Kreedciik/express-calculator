import express, { Express } from "express";
import { CalculatorController } from "./controllers/calculator_controller";
import bodyParser from "body-parser";
export class App {
  private port: number = 3000;
  private host: string = "127.0.0.1";
  private app!: Express;
  private calculatorController: CalculatorController;
  constructor(calculatorController: CalculatorController) {
    this.app = express();
    this.calculatorController = calculatorController;
  }

  useRouter() {
    this.app.use(this.calculatorController.getRouter());
  }

  useMiddlewares() {
    this.app.use(bodyParser.json());
  }

  public init() {
    this.useMiddlewares();
    this.useRouter();
    this.listen();
  }

  private listen() {
    this.app.listen(this.port, () => {
      console.log(`Server running on ${this.host}:${this.port}`);
    });
  }
}
