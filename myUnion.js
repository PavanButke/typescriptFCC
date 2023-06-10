// combination of two or more datatype a variable can have
var bankBalance = "245rs.";
bankBalance = "-5";
bankBalance = "356rs";
var me = { userName: "Idk", userEmail: "idk@anonymous.com", power: true };
function verifyPasskey(id) {
    if (typeof id === "string") {
        console.log(id.toUpperCase, "is string");
    }
    else {
        console.log(id + 0, " is number");
    }
}
//const myArr: number[]|string[]=[1 , 2 , "3"]
//the above line gives error: Type '(string | number)[]' is not assignable to type 'number[] | string[]'.
var myArr = [1, 2, "3"];
