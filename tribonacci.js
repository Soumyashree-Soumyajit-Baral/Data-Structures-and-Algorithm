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
let n = parseInt(readLine());
let arr = [0, 1, 1];
for (let i = 3; i <= n; i++) {
	arr[i] = arr[i - 1] + arr[i - 2] + arr[i - 3];
}
console.log(arr);
console.log(arr[n]);
