let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}
let s=readLine().split('');
let l=s.length;
let n=0;
for(let i=1;i<=l;i=i+1) {
    let sn=s[i-1];
    if (sn==='+') {
        n=n+1;
    }else if (sn==='-'){
        n=n-1;
    }else{
        console.log("Invalid Symbol")
    }
}
console.log(n);