import { afterMethod } from "kaop-ts";

const double = afterMethod((meta) => (meta.result *= 2));

class DummyExample {
   @double
   static calculateSomething(num: number, num2: number) {
      return num * num2;
   }
}

console.log(DummyExample.calculateSomething(3, 3));
console.log(DummyExample.calculateSomething(5, 5));
