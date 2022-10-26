let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
	idx++;
	return data[idx - 1];
}

function mul(num){
    if(num<=0){
        return 1;
    }
    let rem=num%10;
    return rem*mul(parseInt(num/10));
}
let n=parseInt(readLine());
for(let i=0;i<n;i++){
    let num=parseInt(readLine());
    console.log(mul(num));
}