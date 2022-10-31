let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1].trim();
}

// -------- Do NOT edit anything above this line ----------
// Use readLine() for taking input, it will read one line of from the input  and is stored in string format
let n=parseInt(readLine())
let cnt=0;
for(let i=0;i<n;i++){
	let sum=0;
	let mul=1;
	let num=parseInt(readLine());
	while(num>0){
		let rem=num%10;
		sum=sum+rem;
		mul=mul*rem;
		num=parseInt(num/10)
	}
	if(sum>=mul){
		cnt++
	}
}
console.log(cnt)