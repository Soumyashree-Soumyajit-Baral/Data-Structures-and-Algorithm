let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}
let n=parseInt(readLine());
let even=0;
let odd=0;
for (let i=1;i<=n;i++){
    a=parseInt(readLine());
    if(a%2 ===0){
        even=even+1;
    }else{
        odd=odd+1;
    }
}
console.log(odd);
console.log(even);