import { afterMethod } from "kaop-ts";

const upper = afterMethod((meta) => (meta.result = meta.result.toUpperCase()));

class Greating {
   @upper
   static sayHello(firstname: string, lastname: string): string {
      return `Hi, my name is ${firstname} ${lastname}`;
   }
}

console.log(Greating.sayHello("John", "Doe"));
