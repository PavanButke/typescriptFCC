interface myProfile{
    name: string,
    email: string,
    designation: string,
    salary?: number,
    myAge(): number
}
const pbProfile={
    name:"Pavan",
    email:"butkepavan55",
    salary:0,
    myAge:()=>
    {
        return 24;
    }
}

export {}