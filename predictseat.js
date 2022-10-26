let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}
let n=parseInt(readLine());
for (let i=1;i<=n;i++){
    let num=readLine().split(" ");
    let c=parseInt(num[0]);
    let b=parseInt(num[1]);
    if(c<b){
        console.log("Invalid");
    }else if (b%8===0){
        console.log('SU');
    }else if (b%8===1 || b%8===4){
        console.log('L');
    }else if (b%8===2 || b%8===5){
        console.log('M');
    }else if (b%8===3 || b%8===6){
        console.log('U');
    } else {
        console.log("SL");
    }
}