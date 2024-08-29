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
var cal = /** @class */ (function () {
    function cal(a1, b1) {
        this.a1 = a1;
        this.b1 = b1;
        this.a = a1;
        this.b = b1;
    }
    cal.prototype.add = function (a, b) {
        console.log("add two numbers:".concat(a + b));
    };
    cal.prototype.sub = function (a, b) {
        console.log("sub two numbers:".concat(a - b));
    };
    return cal;
}());
var advanceCal = /** @class */ (function (_super) {
    __extends(advanceCal, _super);
    function advanceCal(a, b, c) {
        var _this = _super.call(this, a, b) || this;
        _this.c = c;
        return _this;
    }
    advanceCal.prototype.print = function () {
        console.log(this.a + " " + this.b + " " + this.c);
    };
    advanceCal.prototype.add1 = function (a, b, c) {
        console.log("add three numbers:".concat(a + b + c));
    };
    return advanceCal;
}(cal));
var cal1 = new advanceCal(1, 2, 3);
cal1.add1(20, 20, 30);
cal1.add(10, 20);
