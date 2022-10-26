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
    arr[i]=parseInt(readLine());
}
let sqarray=arr.map(k => k*k);
let sortedarray=sqarray.sort((a,b) => (a-b));
for(each of sortedarray){
    console.log(each);
}