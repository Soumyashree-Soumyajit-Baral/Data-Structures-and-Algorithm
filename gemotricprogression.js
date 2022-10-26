let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}
let firstno=parseInt(readLine());
let secondno=parseInt(readLine());
let thirdno=parseInt(readLine());
let r=secondno/firstno;
let fourthno=parseInt(firstno*r**3);
console.log(fourthno);
