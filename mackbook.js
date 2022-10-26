let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}
let n=parseInt(readLine());
let sum =0;
for (i=1;i<=n;i++){
    a=parseInt(readLine());
    if(a>0){
        sum=sum+a;
    }
}
console.log(sum);