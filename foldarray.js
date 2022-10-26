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
for(i=0;i<n;i++){
    arr[i]=parseInt(readLine());
}
let m=parseInt(readLine());
for(let i=0;i<m;i++){
    let list=[];
    let lindex=0;
    let rindex=arr.length-1;
    while(lindex<=rindex){
        if(lindex!=rindex){
            list.push(arr[lindex]+arr[rindex]);
        }else{
            list.push(arr[lindex]);
        }
        lindex++;
        rindex--;
    }
    arr=list;
}
console.log(arr.length);
for(let i=0;i<arr.length;i++){
    console.log(arr[i])
}