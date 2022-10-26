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
let sarr=arr.sort((a,b)=>a-b);
let min=String(sarr[0]);
let sum=0;
for(let i=0;i<min.length;i++){
    sum=sum+parseInt(min[i]);
}
if(sum%2===1){
    console.log(0);
}else{
    console.log(1);
}