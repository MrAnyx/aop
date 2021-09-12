var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { afterMethod } from "kaop-ts";
var upper = afterMethod(function (meta) { return (meta.result = meta.result.toUpperCase()); });
var Greating = /** @class */ (function () {
    function Greating() {
    }
    Greating.sayHello = function (firstname, lastname) {
        return "Hi, my name is " + firstname + " " + lastname;
    };
    __decorate([
        upper
    ], Greating, "sayHello", null);
    return Greating;
}());
console.log(Greating.sayHello("John", "Doe"));
