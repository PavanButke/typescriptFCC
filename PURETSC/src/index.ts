class devTeam{
    empId: number
    role: string
    private readonly salary: string="3567777USD"
    constructor(empId: number , role: string)
    {
        this.empId= empId;
        this.role= role;
        //can access salary inside constructor
        this.salary="54954895490USD";
    }
    
}
//  devTeam.salary="33545555USD"; ==> can not access salary out the class
const Pavan= new devTeam(12454 , 'Backend Dev')