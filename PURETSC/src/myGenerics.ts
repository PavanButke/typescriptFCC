// const favArr : Array<string>=[]
// const notFavArr : Array<number>=[]
// //val type is locked and used same till further most val
// function validType<Type>(val: Type): Type{
//     return val;
// }

// //validType(true)

// interface myTask{
//     bugId: string
//     deadline: Date
// }

// validType<myTask>({
//     bugId: "1201",
//     deadline: new Date()
// })

function getSearchProducts<T>(products: T[]): T{
    const myIndx=4
    return products[myIndx]
}

const getMoreSearchProducts= <T,>(products: T[]):T =>{
    const myIndx=6
    return products[myIndx]
} 