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
let no_tc = parseInt(readLine());
for (let count = 0; count < no_tc; count++) {
	let n = parseInt(readLine());
	let arr = readLine().split(" ");
	for (let i = 0; i < n; i++) {
		arr[i] = parseInt(arr[i]);
	}
	if (n === 1) {
		console.log(1);
	} else {
		let findex = [];
		let lindex = [];
		findex[0] = arr[0];
		lindex[n - 1] = arr[n - 1];
		for (let i = 1; i < n; i++) {
			findex[i] = arr[i] * findex[i - 1];
		}
		for (let i = n - 2; i >= 0; i--) {
			lindex[i] = arr[i] * lindex[i + 1];
		}
		for (let i = 0; i < n; i++) {
			if (i === 0) {
				arr[i] = lindex[1];
			} else if (i === n - 1) {
				arr[i] = findex[n - 2];
			} else {
				arr[i] = findex[i - 1] * lindex[i + 1];
			}
		}
		console.log(...arr);
	}
}
