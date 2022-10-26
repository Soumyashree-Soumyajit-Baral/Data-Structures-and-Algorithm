let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------
// Use readLine() for taking input, it will read one line of from the input  and is stored in string format
let m = parseInt(readLine());
let arr = [];
for (let i = 0; i < m; i++) {
    let arr1 = readLine().split(" ");
    arr.push(arr1);
}
let list = [];
for (let i = 0; i < arr[0].length; i++) {
    let arr2 = [];
    for (let j = m - 1; j >= 0; j--) {
        arr2.push(arr[j][i]);
    }
    list.push(arr2);
}
for (each of list) {
    console.log(...each);
}