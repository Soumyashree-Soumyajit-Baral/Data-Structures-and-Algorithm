let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');
function readLine() {
  idx++;
  return data[idx - 1];
}
let n=parseInt(readLine());//n=5
let sum=0;//sum=0
for (let i=1;i<=n;i++){//i=1;i=2;i=3;i=4;i=5
    sum=sum+i;//sum=0+1=1;sum=1+2=3;sum=sum+3=6;sum=sum+4=10;sum=sum+5=15
}
console.log(sum);//output=15