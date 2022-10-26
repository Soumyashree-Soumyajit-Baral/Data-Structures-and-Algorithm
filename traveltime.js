let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}

let speed=parseInt(readLine());
let distance=600;
let time=parseInt(distance/speed);
console.log(time);