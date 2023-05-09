import { parseToNumber } from "../../helpers/parseToNumber";

export class CalculatorService {
  a: string | undefined;
  b: string | undefined;
  constructor(a: any, b: any) {
    this.a = a;
    this.b = b;
  }

  getSum() {
    return parseToNumber(this.a) + parseToNumber(this.b);
  }
  getSubstract() {
    return parseToNumber(this.a) - parseToNumber(this.b);
  }
  getMultiply() {
    return parseToNumber(this.a) * parseToNumber(this.b);
  }
  getDivision() {
    return parseToNumber(this.a) / parseToNumber(this.b);
  }
}
