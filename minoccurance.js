let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
	idx++;
	return data[idx - 1];
}
let n= parseInt(readLine());
let a1=parseInt(readLine());
let rep=1;
for (let i=1;i<n;i++) {
    let a2=parseInt(readLine());
    if (a1===a2){
        rep=rep+1;
    }

}
console.log(rep);