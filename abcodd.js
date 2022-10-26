const { count } = require("console");
let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}
let num=readLine().split(" ");
let n1=parseInt(num[0]);
let n2=parseInt(num[1]);
if ((n1*n2)%2 != 0){
    console.log("Yes")
}else {
    console.log("No");
}