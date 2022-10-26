let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}
let num=readLine().split(" ");
let n=parseInt(num[0]);
let k=parseInt(num[1]);
if (n%k===0){
  console.log(0);
}else{
  console.log(1);
}
