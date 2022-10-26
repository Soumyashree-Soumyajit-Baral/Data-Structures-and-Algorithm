let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}
let n=parseInt(readLine());
let sum=0;
let i=0;
while(i<n){
    let num=parseInt(readLine());
    sum=sum+num;
    i=i+1;

}
if (sum/n > 100){
    console.log("Excellent!");
}else{
    console.log("Not Excellent!")
}