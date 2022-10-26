let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}
let n=parseInt(readLine());
let n1=parseInt(readLine());
let mul=-1*Number.MAX_VALUE;

for(let i=1;i<n;i++){
    let n2 = parseInt(readLine());
    let prod=n1*n2;
    if(prod>mul){
        mul=prod;
    }
    n1=n2;
}
console.log(mul);