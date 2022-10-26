let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}
let nx=readLine().split(" ");
let n=parseInt(nx[0]);
let x=parseInt(nx[1]);
let num=readLine().split(" ");
let count=0;
for(let i=0;i<n;i++){
    if(parseInt(num[i])%x===0){
        count=count+1;
    }
}
console.log(count);