"use strict";
class devTeam {
    constructor(empId, role) {
        this.empId = empId;
        this.role = role;
        this.curr = "INR";
        this._salary = "3567777";
    }
    //getter
    get getAppleId() {
        return `apple${this.empId}`;
    }
    get salary() {
        return this.salary;
    }
    set salary(curr) {
        this._salary = this.salary + curr;
        console.log(this._salary);
    }
}
class payrollTeam extends devTeam {
    constructor() {
        super(...arguments);
        this.isOrg = true;
    }
    costCutting() {
        this._salary = "-5000";
    }
}
//  devTeam.salary="33545555USD"; ==> can not access salary out the class
const Pavan = new devTeam(12454, 'Backend Dev');
