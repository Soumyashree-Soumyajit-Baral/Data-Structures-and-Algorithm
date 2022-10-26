let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}
// let line=readLine().split(' ');
// let n1=parseInt(line[0]);
// let n2=parseInt(line[1]);
// if(n1>=0&&n2>=0){
//     if(n1+n2<=12){
//         console.log(n1+n2);
//     }
//     else if(n1+n2>12){
//         for(i=12;i==i;i=i+12){
//             if(((n1+n2)-i)<=12){
//                 console.log((n1+n2)-i)
//                 break;
//             }
//         }
//     }
// }
// let line=readLine().split(' ');
// let n1=parseInt(line[0]);
// let n2=parseInt(line[1]);
// let sum=n1+n2;
// if(sum<=12){
//     console.log(sum);
// }else if (sum > 12) {
//     for(let i=12;i==i;i=i+12){
//         sum=sum-i;
//         if (sum<=12){
//             console.log(sum);
//             break;
//         }

//     }
// }

let line=readLine().split(' ');
let n1=parseInt(line[0]);
let n2=parseInt(line[1]);
let rem=(n1+n2)%12;
if (rem===0){
    console.log(12);
}else{
    console.log(rem);
}