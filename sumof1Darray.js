let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1];
}
let arr=[1,2,3,4];
let sum=0;
for(let i=0;i<arr.length;i++){
    sum=sum+arr[i];
    arr[i]=sum;
    
}
console.log(arr);


// not completed