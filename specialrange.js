let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1];
}
let m = parseInt(readLine());
let n = parseInt(readLine());
let i=m;
if (m <= i && i <= n) {
    for ( i = m + 1; i <= n; i = i + 1) {
        if (i >= 0) {
            console.log(i);
        }
    }
} else  {
    console.log(-1)
}
