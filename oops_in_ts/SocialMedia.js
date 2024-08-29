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
var SocialMedia = /** @class */ (function () {
    function SocialMedia(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Object.defineProperty(SocialMedia.prototype, "fullName", {
        get: function () {
            return "".concat(this.firstName, " ").concat(this.lastName);
        },
        enumerable: false,
        configurable: true
    });
    SocialMedia.prototype.compensationStatement = function () {
        return "".concat(this.fullName, " makes ").concat(this.getSalary(), " a month.");
    };
    return SocialMedia;
}());
var FullTimeEmployee = /** @class */ (function (_super) {
    __extends(FullTimeEmployee, _super);
    function FullTimeEmployee(firstName, lastName, salary) {
        var _this = _super.call(this, firstName, lastName) || this;
        _this.salary = salary;
        return _this;
    }
    FullTimeEmployee.prototype.jobRole = function () {
        throw new Error("Method not implemented.");
    };
    FullTimeEmployee.prototype.getSalary = function () {
        return this.salary;
    };
    return FullTimeEmployee;
}(SocialMedia));
var NewFullTimeEmployees = /** @class */ (function (_super) {
    __extends(NewFullTimeEmployees, _super);
    function NewFullTimeEmployees(firstName, lastName, getsalery, jobrole) {
        var _this = _super.call(this, firstName, lastName, getsalery) || this;
        _this.getsalery = getsalery;
        _this.jobrole = jobrole;
        return _this;
    }
    NewFullTimeEmployees.prototype.jobRole = function () {
        return "".concat(this.jobRole);
    };
    return NewFullTimeEmployees;
}(FullTimeEmployee));
var newEmployee = new NewFullTimeEmployees('vicky', 'v', 1200, "SDE-1(SRE)");
console.log(newEmployee);
//console.log(john.print());
