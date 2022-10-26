let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}

function sumofdiagonals(list){
    let sum=0;
    let r1=0;
    let c1=list.length-1;
    // let r2=0;
    // let c2=0;
    for(let i=0;i<list.length;i++){
       sum=sum+list[r1][c1]+list[r1][r1];
       r1++;
       c1--;
    }
    // for(let j=0;j<list.length;j++){
    //     sum=sum+list[r2][c2];
    //     r2++;
    //     c2++;
    // }
    return sum;
}

function ston(list){
    for(let i=0;i<list.length;i++){
        list[i]=parseInt(list[i]);
    }
}


let n=parseInt(readLine());
let list=[];
for(let i=0;i<n;i++){
    let arr=readLine().split(" ");
    ston(arr);
    list.push(arr);
}
console.log(sumofdiagonals(list));