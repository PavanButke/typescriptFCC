//very script in case of no. of ele defined == no.of decl
let direction:[string , string , string , string]=["north","south","east","west" ];
//cannot use the below one: gives Type '[string, string, string, string, string]' is not assignable to type '[string, string, string, string]'.ts
//let directions:[string , string , string , string]=["north","south","east","west" , "northwest"];

type User=[number , string]
const newUser : User=[ 2 , "abc@gmail.com"]
newUser[1]="def@gmail.com"

//also not allowed as: Argument of type 'boolean' is not assignable to parameter of type 'string | number'.
newUser.push(true);
export {}   