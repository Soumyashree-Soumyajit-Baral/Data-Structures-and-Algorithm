const { count } = require("console");
let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}
let n=parseInt(readLine());
// for (let count=1;count<=n;count=count+1) {
//     console.log(n*count);
// }

for(let i=1;i<=n*n;i++){
  if(i%n===0){
    console.log(i);
  }
}