let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}

let n=parseInt(readLine());
let n1=parseInt(readLine());
let smallno=n1;
let maxno=0;
for( let i=0;i<n;i++){
    let n2=parseInt(readLine());
    if(n2>=maxno){
        maxno=n2;
    }
    if(n2<=smallno){
        smallno=n2;
    }
}
console.log(smallno*maxno);
