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
function ston(list){
	for(let i=0;i<list.length;i++){
		list[i]=parseInt(list[i]);
	}
}
let nk=readLine().split(" ");
let n=parseInt(nk[0]);
let k=parseInt(nk[1]);
let arr=readLine().split(" ");
ston(arr);
let felement=arr[k-1];
let lelement=arr[n-k];
arr[k-1]=lelement;
arr[n-k]=felement;
// for(let i=1;i<=n;i++){
// 	if(i===k){
// 		felement=arr[i-1];
// 	}
// 	if(i===n-k+1){
// 		lelement=arr[i-1];
// 	}
// }
// for(let i=0;i<n;i++){
// 	if(i===k-1){
// 		arr[i]=lelement;
// 	}
// 	if(i===n-k){
        
// 		arr[i]=felement;
// 	}
// }
for(each of arr){
	console.log(each);
}