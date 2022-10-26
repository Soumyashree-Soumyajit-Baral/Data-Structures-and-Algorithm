let fs = require("fs");
const { isFunction } = require("util");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1];
}
let n = parseInt(readLine());
let arr = [];
for (let i = 0; i < n; i++) {
    arr[i] = parseInt(readLine());
}

let output = [];
let max = arr[n - 1];
output.push(arr[n - 1]);
for (let i = n - 1; i >= 0; i--) {
    if (arr[i] > max) {
        max = arr[i];
        output.push(arr[i]);
    }
}
for (each of output) {
    console.log(each);
}