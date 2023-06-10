// combination of two or more datatype a variable can have

let bankBalance: number | string= "245rs."

bankBalance="-5"
bankBalance="356rs"
type userControls={
    userName: string
    userEmail: string
    power: boolean
}

type adminControls={
    adminName: string
    adminEmail: string
    adminPassnum: number
}

let me: userControls | adminControls={userName:"Idk",userEmail:"idk@anonymous.com",power:true}

function verifyPasskey(id: number | string)
{
    if(typeof id==="string")
    {
        console.log(id , "is string");
        
    }
    else{
        console.log(id ," is number");
        
    }
}