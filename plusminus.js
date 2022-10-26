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
let i = 0;
while (i < n) {
    let a1 = parseInt(readLine());
    if (i % 2 === 0) {
        sum = sum + a1;
    } else {
        sum = sum - a1;
    }
    i = i + 1;
}
console.log(sum)