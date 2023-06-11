interface myProfile{
    name: string,
    email: string,
    designation: string,
    salary?: number,
    myAge(): number
}

//reopenning interface myProfile
interface myProfile{
    authToken: string
}
const pbProfile={
    name:"Pavan",
    email:"butkepavan55",
    salary:0,
    myAge:()=>
    {
        return 24;
    },
    authToken: "gmfmglknfg#$lfmgk45fle"
}

export {}