let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}
let n=parseInt(readLine());
let arr=[];
for(i=0;i<n;i++){
    let n1=parseInt(readLine());
    arr.push(n1);
}
let a=parseInt(readLine());
let count=0;
for(i=0;i<5;i++){
    if(arr[i]===a){
        count=count+1;
    }
}
console.log(count);