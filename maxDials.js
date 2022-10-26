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
let max = parseInt(readLine());
let m = parseInt(readLine());
let arr = [];
for (let i = 0; i < m; i++) {
	arr.push(parseInt(readLine()));
}
while (n > 0) {
	let cnt = 0;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] + 1 === max) {
			cnt = i + 1;
			break;
		} else {
			arr[i] = arr[i] + 1;
		}

	}
	if (cnt) {
		console.log(cnt);
		break;
	}
	n--;

}