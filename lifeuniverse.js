const { count } = require("console");
let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}
let n= parseInt(readLine());
while (n!=42) {
    console.log(n);
    n=parseInt(readLine())
}