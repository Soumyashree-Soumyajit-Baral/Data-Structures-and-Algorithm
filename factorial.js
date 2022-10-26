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
function factorial(number) {
    // write your code here
    if (number === 0) {
        return 1;
    } else {
        let fact = 1;
        for (let i = 1; i <= number; i++) {
            fact = fact * i;
        }

        if (fact > 0) {
            return fact;
        } else {
            return 'undefined';
        }
    }

}

let number = parseInt(readLine());

console.log(factorial(number));