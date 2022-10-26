let fs = require("fs");
const { resourceLimits } = require("worker_threads");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1];
}
// let n = parseInt(readLine());
// let n1 = parseInt(readLine());
// let count1 = 1;
// let count2 = 0;
// for (let i = 1; i < n; i++) {
//     let n2 = parseInt(readLine());
//     if (n1 === n2) {
//         count1 = count1 + 1;
//     } else {
//         count2 = count2 + 1;
//         n1 = n2;
//     if (count1 < count2) {
//         console.log(n1);
//     } else if (count1 === count2) {
//         console.log(n1);
//         console.log(n2);
//     } else {
//         console.log(n2);
//     }

//     }
// }

// let n=parseInt(readLine());
// let arr=[];
// let arr1=[];
// for(let i=0;i<n;i++){
//     arr.push(parseInt(readLine()));
// }

// let n1=arr[0];
// let count=1;
// let rep=0;
// for(let i=1;i<n;i++){
//     if(n1===arr[i]){
//         count++;
//         if(count>=rep){
//             rep=count;
//             arr1.push(arr[i]);
//         }
//     }else{
//         count=1;
//     }
// }
// console.log(arr1)
// for(let num of arr1){
//     console.log(num);
// }

// let n = parseInt(readLine());
// let arr = [];
// let count = 1;
// let rep = 0;
// let n1 = parseInt(readLine());
// for (let i = 1; i < n; i++) {
//     let n2 = parseInt(readLine());
//     if (n1 === n2) {
//         count++;
//         if (count > rep) {
//             arr.splice(0, arr.length);
//             arr.push(n1);
//             rep = count;
//         }
//         if (count === rep) {
//             arr.push(n1);
//         }
//     } else {
//         count = 1;
//         n1 = n2;
//     }
// }
// if (rep === 0) {
//     console.log(-1);
// } else {
//     arr.shift()
//     for (let num of arr) {
//         console.log(num);
//     }
// }



// let n = parseInt(readLine());
// let arr = [];
// for (let i = 0; i < n; i++) {
//     arr[i] = parseInt(readLine());
// }
// if (n > 0) {
//     if (n === 1) {
//         console.log(arr[0]);
//     } else if (n > 1) {
//         let max = 1;
//         let count = 1;
//         for (let i = 1; i < n; i++) {
//             if (arr[i] === arr[i - 1]) {
//                 count++;
//             } else {
//                 if (count > max) {
//                     max = count;
//                 }
//                 count = 1;
//             }
//         }
//         if (count > max) {
//             max = count;
//         }
//         count = 1;
//         if (max > 1) {
//             for (let i = 0; i < n; i++) {
//                 if (arr[i] === arr[i - 1]) {
//                     count++;
//                 } else {
//                     if (count === max) {
//                         console.log(arr[i - 1]);
//                     }
//                 }
//                 count = 1;
//             }
//         }
//         if (count === max) {
//             console.log(n - 1);
//         } else {
//             if (count === 1 && max === 1) {
//                 for (let i = 1; i < n; i++) {
//                     console.log(arr[i]);
//                 }
//             }
//         }
//     }
// } else {
//     console.log(-1);
// }



let n=parseInt(readLine());
let list=[];
for(let i=0;i<n;i++){
    list[i]=parseInt(readLine());
}
let maxcount=1;
if(list.length>0){
    let count=1;
    for(let i=1;i<n;i++){
        if (list[i]===list[i-1]){
            count++;
        }else{
            maxcount=Math.max(count,maxcount);
            count=1;
        }
    }
    maxcount=Math.max(count,maxcount);
    count=1
    let res=[]
    for(let i=1;i<n;i++){
        if(list[i]===list[i-1]){
            count++;
        }else{
            if(count===maxcount){
                res.push(list[i-1]);
            }
            count=1;
        }
    }
    if(count===maxcount){
        res.push(list[n-1]);
    }
    for(let i=0;i<res.length;i++){
        console.log(res[i]);
    }
}else{
    console.log(-1);
}

