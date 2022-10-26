let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1];
}
let num = parseInt(readLine());
let count = 1;
while (count <= num) {
    let n = parseInt(readLine());
    let prime = true;
    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            prime = false;
        }
    }
    if (prime === true) {
        console.log("Yes");
    } else {
        console.log("No");
    }
    count = count + 1;
}
