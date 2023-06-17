"use strict";
class dreamProject {
    constructor(timeReq, moneyReq, effortsReq) { }
}
let everyDayEffort = 1;
class Momentum extends dreamProject {
    getWorkYourAssOff() {
        try {
            everyDayEffort = 10 * everyDayEffort - 10;
        }
        catch (Exception) {
            throw new Error("Don't be harsh on yourself.");
        }
    }
}
const today = new Momentum(1, "0", 499990);
