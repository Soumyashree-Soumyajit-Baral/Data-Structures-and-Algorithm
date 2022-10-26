let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}

let n = parseInt(readLine());
let sum = 0;
let mul = 1;
if (n != 0) {
  while (n > 0) {
    let rem = n % 10;
    sum = sum + rem;
    mul = mul * rem;
    n = parseInt(n / 10);
  }
  console.log(mul - sum);
} else {
	console.log(0)
}