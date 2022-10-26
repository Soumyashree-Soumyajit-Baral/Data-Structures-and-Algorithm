let fs = require("fs");
// const { Z_NO_COMPRESSION } = require("zlib");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1];
}

function HEC(steps){
	let nv=0;
	let u=0;
	let d=0;
	for(let i=0;i<steps.length;i++){
        
		if(steps[i]=="U"){
			u++;
			if(u>1 && u===d){
				nv++;
			}
		}else{
			d++;
			if(d>1 && u===d){
				nv++;
			}
		}
        
	}
	return nv;
}

let t=parseInt(readLine());
for(let i=0;i<t;i++){
	let n=parseInt(readLine());
	let steps=readLine();
	console.log(HEC(steps));
}