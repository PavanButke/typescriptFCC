class devTeam{
    curr="INR"
    protected _salary: string="3567777"
    constructor(public empId: number ,public role: string)
    {}
    //getter
    get getAppleId():string{
        return `apple${this.empId}`
    }
    
    get salary():string{
        return this.salary;
    }
    
    set salary(curr){
        this._salary=this.salary+curr;
        console.log(this._salary);     
    }
    
}

class payrollTeam extends devTeam{
    isOrg: boolean= true
    costCutting(){
        this._salary= "-5000"
    }
}

//  devTeam.salary="33545555USD"; ==> can not access salary out the class
const Pavan= new devTeam(12454 , 'Backend Dev')