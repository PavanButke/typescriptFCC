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
var devTeam = /** @class */ (function () {
    function devTeam(empId, role) {
        this.empId = empId;
        this.role = role;
        this.curr = "INR";
        this._salary = "3567777";
    }
    Object.defineProperty(devTeam.prototype, "getAppleId", {
        //getter
        get: function () {
            return "apple".concat(this.empId);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(devTeam.prototype, "salary", {
        get: function () {
            return this.salary;
        },
        set: function (curr) {
            this._salary = this.salary + curr;
            console.log(this._salary);
        },
        enumerable: false,
        configurable: true
    });
    return devTeam;
}());
var payrollTeam = /** @class */ (function (_super) {
    __extends(payrollTeam, _super);
    function payrollTeam() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isOrg = true;
        return _this;
    }
    payrollTeam.prototype.costCutting = function () {
        this._salary = "-5000";
    };
    return payrollTeam;
}(devTeam));
//  devTeam.salary="33545555USD"; ==> can not access salary out the class
var Pavan = new devTeam(12454, 'Backend Dev');
