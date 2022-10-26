let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}

let p = readLine();
let t = readLine();
let r = readLine();
let SI=p*t*r/100
console.log(SI)