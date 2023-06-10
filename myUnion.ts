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
        console.log(id.toUpperCase , "is string");
        
    }
    else{
        console.log(id+0 ," is number");
        
    }
}

//const myArr: number[]|string[]=[1 , 2 , "3"]
//the above line gives error: Type '(string | number)[]' is not assignable to type 'number[] | string[]'.
const myArr: (number|string)[]=[1 , 2 , "3"]