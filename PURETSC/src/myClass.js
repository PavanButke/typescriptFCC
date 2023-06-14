"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Production = /** @class */ (function () {
    function Production(commit, deployedToEnv, timeTakenInMins, upTimeInHrs) {
        this.commit = commit;
        this.deployedToEnv = deployedToEnv;
        this.timeTakenInMins = timeTakenInMins;
        this.upTimeInHrs = upTimeInHrs;
    }
    return Production;
}());
Production.toString();
