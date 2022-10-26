let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1];
}
let n = parseInt(readLine());
let a = 0;
let status = "False"
for (let i = 1; i <= n; i++) {
    let a1 = parseInt(readLine());
    if ((a + a1) > 100) {
        status = "True";
    } else {
        a = a1
    }
}
console.log(status);