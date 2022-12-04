

// setTimeout(()=>{
//     console.log("soumya")
//     setTimeout(()=>{
//         console.log("soumya1")
//         setTimeout(()=>{
//             console.log("soumya2")
//         },1000)
//     },1000)
// },1000)

let order=(time,work)=>{
    return new Promise((res,rej)=>{
        if(true){
            setTimeout(()=>{
                res(work())
            },time)
        }else{
            rej(console.log("issue"))
        }
    })
}
// order(1000,()=>console.log("soumya"))
// .then(()=>{
//     return order(1000,()=>console.log("soumya1"))
// })
// .then(()=>{
//     return order(1000,()=>console.log("soumya2"))
// })
// .finally(()=>console.log("sucessful"))

async function abc(){
    try{
    let result1=await order(1000,()=>console.log("soumya"))
    let result2=await order(1000,()=>console.log("soumya1"))
    let result3=await order(1000,()=>console.log("soumya2"))
    console.log(result1,end="\n",result2,end="\n",result3)
    }catch(err){
        console.log(err)
    }finally{
        console.log("done")
    }
}
// abc()
setTimeout(()=>{
    console.log("mamba")
},100)
setTimeout(()=>{
    console.log("mamba1")
},200)
setTimeout(()=>{
    console.log("mamba2")
},100)

console.log("mamba4")
