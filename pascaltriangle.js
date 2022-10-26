let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1];
}
let n = parseInt(readLine());
let prevRow = [1];
for (let row = 2; row <= n; row++) {
    let currRow = [];
    for (let column = 0; column < row; column++) {
        if (column === 0) {
            currRow.push(1);
        } else if (column === row - 1) {
            currRow.push(1);
        } else {
            currRow.push(prevRow[column - 1] + prevRow[column]);
        }
    }
    prevRow = currRow;
}
for (let i = 0; i < n; i++) {
    console.log(prevRow[i]);
}