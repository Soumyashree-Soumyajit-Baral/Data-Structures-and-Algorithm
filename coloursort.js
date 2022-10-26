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
// let sqarray=arr.map(k => k*k);
// let sortedarray=arr.sort((a,b) => (a-b));
let red=0;
let white=0;
let blue=0;
for(let i=0;i<n;i++){
	if(arr[i]===0){
		red++;
	}else if(arr[i]===1){
		white++;
	}else{
		blue++;
	}
}
for(let i=0;i<n;i++){
    if(red>0){
        arr[i]=0;
        red--;
    }
    else if(white>0){
        arr[i]=1;
        white--;
    }else{
        arr[i]=2;
        blue--;
    }
}
for(each of arr){
    console.log(each);
}