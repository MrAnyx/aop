import { afterMethod } from "kaop-ts";
var double = afterMethod(function (meta) { return (meta.result *= 2); });
var DummyExample = /** @class */ (function () {
    function DummyExample() {
    }
    // @double
    DummyExample.calculateSomething = function (num, num2) {
        return num * num2;
    };
    return DummyExample;
}());
console.log(DummyExample.calculateSomething(3, 3));
console.log(DummyExample.calculateSomething(5, 5));
