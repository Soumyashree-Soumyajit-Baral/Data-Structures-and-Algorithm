function outer(){
    let outer="outside"
    return function inner(){
        console.log(outer)
    }
}
let closure=outer()
// console.log(closure)
// console.log(closure())

function sum(){
    let sum=0
    return function (num){
        sum=sum+num
        console.log(sum)
    }
}

let inner=sum()
console.log(inner(10))
console.log(inner(10))
console.log(inner)