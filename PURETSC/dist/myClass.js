"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Production {
    constructor(commit, deployedToEnv, timeTakenInMins, upTimeInHrs) {
        this.commit = commit;
        this.deployedToEnv = deployedToEnv;
        this.timeTakenInMins = timeTakenInMins;
        this.upTimeInHrs = upTimeInHrs;
    }
}
Production.toString();
