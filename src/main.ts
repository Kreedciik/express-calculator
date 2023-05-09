import { App } from "./app";
import { CalculatorController } from "./controllers/calculator_controller";

function bootstrap() {
  const app = new App(new CalculatorController());
  app.init();
}

bootstrap();
