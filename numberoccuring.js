let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}
// let n=parseInt(readLine());
// let n1=parseInt(readLine());
// let count=1;
// let count2=0;
// for(let i=1;i<n;i++){
//     let n2=parseInt(readLine());
//     if(n1===n2){
//         count=count+1;
//         // n1=n2;
//         if (count===4){
//             count2=count2+1;
//             console.log(n1);
//         }
//     }else {
//         n1=n2;
//         count=1;
//     }
// }
// if (count2===0){
//     console.log(-1);
// }


let n=parseInt(readLine());
let n1=parseInt(readLine());
let count=1;
let count2=0;
let i=1;
while(i<n){
    let n2=parseInt(readLine());
    if(n1===n2){
        count=count+1;
        // n1=n2;
        if (count===4){
            count2=count2+1;
            console.log(n1);
        }
    }else {
        n1=n2;
        count=1;
    }
    i++;
}
if (count2===0){
    console.log(-1);
}