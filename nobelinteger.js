let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}
let n=readLine(parseInt())
let arr=[];
let occurance=0;
for(let num=0;num<n;num++){
    arr[num]=parseInt(readLine());
}
for(let i=0;i<n;i++){
    let count=0;
    for(let j=0;j<n;j++){
        if(arr[j]>arr[i]){
            count++;
        }
    }
    if(count===arr[i]){
        console.log(1);
        occurance++;
        break;
    }
}
if(occurance===0){
    console.log(-1);
}