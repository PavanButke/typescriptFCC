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
var dreamProject = /** @class */ (function () {
    function dreamProject(timeReq, moneyReq, effortsReq) {
    }
    return dreamProject;
}());
var everyDayEffort = 1;
var Momentum = /** @class */ (function (_super) {
    __extends(Momentum, _super);
    function Momentum() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Momentum.prototype.getWorkYourAssOff = function () {
        try {
            everyDayEffort = 10 * everyDayEffort - 10;
        }
        catch (Exception) {
            throw new Error("Don't be harsh on yourself.");
        }
    };
    return Momentum;
}(dreamProject));
var today = new Momentum(1, "0", 499990);
