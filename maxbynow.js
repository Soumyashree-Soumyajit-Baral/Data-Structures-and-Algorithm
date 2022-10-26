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
console.log(n1);
for (i=1;i<n;i++){
    let n2=parseInt(readLine());
    if(n1>n2){
        console.log(n1);
    }else{
        
        console.log(n2);
        n1=n2;
    }
}

// let max =0;
// for(let i=0;i<n;i++){
// 	let n1=parseInt(readLine());
// 	if(n1>=max){
// 		console.log(n1);
// 		max=n1;
// 	}else{
// 		console.log(max);
// 	}
// }