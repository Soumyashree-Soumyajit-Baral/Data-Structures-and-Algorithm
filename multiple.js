let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}
let N=parseInt(readLine());
let mul=N*2;
if (mul%2 === 0){
    console.log(N);
} else {
console.log(mul);
}