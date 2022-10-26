let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}
function signum(n){
    
    if(n>0){
        return 1;
    }else if (n<0){
        return -1
    }else {
        return 0;
    }
}
let N=parseFloat(readLine());
console.log(signum(N));