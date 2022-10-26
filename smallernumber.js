let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}

let n=parseInt(readLine());
let arr=[];
for(let i=0;i<n;i++){
    arr.push(parseInt(readLine()));
}
let copy=[...arr];
console.log(copy)
copy.sort((a,b)=>a-b);


let map=new Map();
for(let i=0;i<n;i++){
    if(map.has(copy[i])===false){
        map.set(copy[i],i);
    }
}
for(let i=0;i<n;i++){
    console.log(map.get(arr[i]));
}