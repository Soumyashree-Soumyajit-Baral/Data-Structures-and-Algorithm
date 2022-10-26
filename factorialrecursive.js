let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------

function Factorial(n) {
    // Implement this function
    let factorial = 1;
    if (n === 0) {
        return 1;
    } else if (n < 0) {
        return "undefined";
    } else {
        for (let i = 1; i <= n; i++) {
            factorial = factorial * i;
        }
        return factorial;
    }
}

let n = parseInt(readLine());
console.log(Factorial(n));