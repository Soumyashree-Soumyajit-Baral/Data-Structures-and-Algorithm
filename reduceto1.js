let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}
let count=parseInt(readLine());
for(let i=1;i<=count;i=i+1) {
    let n= parseInt(readLine());
    if (n>2) {
        n=n-(n-1)
        console.log(n);
        
    } else {
        console.log(-1);
    }
}