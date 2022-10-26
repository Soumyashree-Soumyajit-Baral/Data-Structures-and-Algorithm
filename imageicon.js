const { count } = require("console");
let fs = require("fs");
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
    let n1 = parseInt(readLine());
    arr.push(n1);
}
let m = parseInt(readLine());
let arr1 = [];
for (let i = 0; i < m; i++) {
    let n2 = parseInt(readLine());
    arr1.push(n2);
}
// if(m<=0 || n<=0){
//     console.log(0);
// }else{
if (arr1.length === 1) {
    let count = 0;
    for (let i = 0; i < n; i++) {
        if (arr[i] === arr1[0]) {
            count++;
        }
    }
    console.log(count);
} else {
    let count = 0;
    for (let i = 0; i < n; i++) {
        if (arr[i] === arr1[1] && arr[i - 1] === arr1[0]) {
            count++;
        }
    }
    console.log(count);
}
// }
