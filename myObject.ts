type User={
    name: string;
    email: string;
    isActive: boolean
}
function createUser(user : User){}

createUser({name:"abc" , email:"abc@def.com",isActive:false})

export {}