let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------
// Use readLine() for taking input, it will read one line of from the input  and is stored in string format
let n=parseInt(readLine());
let arr=[];
for(let i=0;i<n;i++){
    arr[i]=parseInt(readLine());
}
let mono=true;
let tono=true;
for(let j=1;j<n;j++){
    if(arr[j]<arr[j-1]){
        mono=false;
        break;
    }
}
for(let i=1;i<n;i++){
    if(arr[i]>arr[i-1]){
        tono=false;
        break;
    }
}
if(mono || tono){
    console.log("True");
}else{
    console.log("False");
}