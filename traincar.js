let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}
let x=readLine().split(' ');
let N=parseInt(x[0]);
let I=parseInt(x[1]);
let J=(N-I+1);
console.log(J);