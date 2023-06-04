function addTwo(num : number) //type casing 
{
    return num+2;
}

function signupUser(username:string , email:string , password:string="")
{}

function login(username:string , email:string , password:string)
{}


signupUser("p","pgb@gmail.com");

addTwo(5); //gives error , needs number only

const getGreets=(s: string ):string =>{
    return ""
}

//const heros= ["karn","dashgriva","gautama"]
const heros=[1,2,3]

heros.map((hero):string=>{
    return `hero is ${hero}`
    // return 1;
})
     