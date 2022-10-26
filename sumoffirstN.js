let fs = require("fs");
let data = fs.readFileSync("./text.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
	idx++;
	return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------

function sumOfFirstN(n){
	//Implement this function
	if(n===1){
        console.log(1,1);
		return 1;
	}
	let sum=n + sumOfFirstN(n-1);
	console.log(n, sum);
    return sum;
}

let n = parseInt(readLine());
sumOfFirstN(n);