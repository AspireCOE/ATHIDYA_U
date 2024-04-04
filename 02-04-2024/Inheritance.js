var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var ParentClass = /** @class */ (function () {
    function ParentClass() {
    }
    ParentClass.prototype.displayParent = function () {
        console.log("Parent");
    };
    return ParentClass;
}());
var ChildClass = /** @class */ (function (_super) {
    __extends(ChildClass, _super);
    function ChildClass() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ChildClass.prototype.displayChild = function () {
        console.log("Child");
    };
    return ChildClass;
}(ParentClass));
// single inheritance
console.log("Single level inheritance");
var singleInheritance = new ChildClass();
singleInheritance.displayParent();
singleInheritance.displayChild();
console.log();
//
var GrandChildClassOne = /** @class */ (function (_super) {
    __extends(GrandChildClassOne, _super);
    function GrandChildClassOne() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GrandChildClassOne.prototype.displayGrandChild = function () {
        console.log("Grand Child 1");
    };
    return GrandChildClassOne;
}(ParentClass));
// multilevel inheritance
console.log("Multi level inheritance");
var multilevel = new GrandChildClassOne();
multilevel.displayParent();
multilevel.displayGrandChild();
console.log();
//
var GrandChildClassTwo = /** @class */ (function (_super) {
    __extends(GrandChildClassTwo, _super);
    function GrandChildClassTwo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GrandChildClassTwo.prototype.displayGrandChild = function () {
        console.log("Grand child 2");
    };
    return GrandChildClassTwo;
}(ChildClass));
// hierarchial inheritance
console.log("Hierarchial inheritance");
var hierarchial = new GrandChildClassTwo();
hierarchial.displayParent();
hierarchial.displayChild();
hierarchial.displayGrandChild();
console.log();
//
// multiple inheritance
console.log("Multiple inheritance is not possible");
