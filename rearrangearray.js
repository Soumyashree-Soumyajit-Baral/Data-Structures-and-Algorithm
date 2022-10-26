let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}

let n=parseInt(readLine());
let numsarray=[];
let indexarray=[];
let targetarray=[];
for(let i=0;i<n;i++){
    numsarray[i]=parseInt(readLine());
}
for (let j=0;j<n;j++){
    indexarray[j]=parseInt(readLine());
}
for(let x=0;x<n;x++){
    targetarray.splice(indexarray[x],0,numsarray[x]);
}
for(each of targetarray){
    console.log(each);
}