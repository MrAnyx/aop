var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { afterMethod } from "kaop-ts";
var double = afterMethod(function (meta) { return (meta.result *= 2); });
var DummyExample = /** @class */ (function () {
    function DummyExample() {
    }
    DummyExample.calculateSomething = function (num, num2) {
        return num * num2;
    };
    __decorate([
        double
    ], DummyExample, "calculateSomething", null);
    return DummyExample;
}());
console.log(DummyExample.calculateSomething(3, 3));
console.log(DummyExample.calculateSomething(5, 5));
