let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
	idx++;
	return data[idx - 1];
}

let n=parseInt(readLine());
let input=[];
for(let i=0;i<n;i++ ){
    input[i]=parseInt(readLine());
}
// input.sort((a,b)=>(a-b));
input.sort(function(a,b){return(a-b)});
let maximumproduct=input[n-1]*input[n-2]*input[n-3];
console.log(maximumproduct);