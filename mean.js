let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}
let n= parseInt(readLine());
if(1<=n<=6){
    let marks=readLine().split(" ");
    let sum=0;
    for(let i=0;i<n;i++){
        sum=sum+parseInt(marks[i]);
    }
    let mean=parseInt(sum/n);
    console.log(mean);
}
