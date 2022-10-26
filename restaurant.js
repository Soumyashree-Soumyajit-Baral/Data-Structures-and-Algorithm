let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1];
}
let No_of_orders = parseInt(readLine());
let No_of_tables = parseInt(readLine());
let tablesArray = [];
if (No_of_orders === 0) {
    console.log(0);
} else {
    for (let i = 0; i < No_of_orders; i++) {
        tablesArray[i] = parseInt(readLine());
    }
    let billArray = [];
    for (let i = 0; i < No_of_orders; i++) {
        billArray[i] = parseInt(readLine());
    }
    let amountarray = [];
    for (let i = 1; i <= No_of_tables; i++) {
        for (let j = 0; j < tablesArray.length; j++) {
            if (i === tablesArray[j]) {
                if (amountarray[i - 1] > 0) {
                    amountarray[i - 1] = amountarray[i - 1] + billArray[j];
                } else {
                    amountarray[i - 1] = billArray[j]
                }
            }
        }
        if (!tablesArray.includes(i)) {
            amountarray[i - 1] = 0;
        }
    }
    let maxicount = amountarray[0];
    for (let i = 1; i < amountarray.length; i++) {
        if (maxicount < amountarray[i]) {
            maxicount = amountarray[i];
        }
    }
    for (let i = 0; i < amountarray.length; i++) {
        if (amountarray[i] === maxicount) {
            console.log(i + 1);
        }
    }
}