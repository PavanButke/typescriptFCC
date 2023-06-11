interface myProfile{
    name: string,
    email: string,
    designation: string,
    salary?: number,
    myAge(): number
}
interface AllProfiles{
    rank: number
}

//reopenning interface myProfile
interface myProfile extends AllProfiles{
    authToken: string,
    rank: number
}
const pbProfile={
    name:"Pavan",
    email:"butkepavan55",
    rank: 34,
    salary:0,
    myAge:()=>
    {
        return 24;
    },
    authToken: "gmfmglknfg#$lfmgk45fle"
}

export {}