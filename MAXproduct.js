let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
	idx++;
	return data[idx - 1];
}
function ston(list){
    for(let i=0;i<list.length;i++){
        list[i]=parseInt(list[i]);
    }
    // console.log(list)
}

function ntop(list){
    for(let i=0;i<list.length;i++){
        if(list[i]<0){
            list[i]=list[i]*(-1);
        }
    }
    // console.log(list);
}

function max(list){
    let maxno=0;
    for(let i=0;i<list.length;i++){
        if(list[i]>=maxno){
            maxno=list[i];
        }
    }
    // console.log(maxno);
    return maxno;
}

let al=parseInt(readLine());
let bl=parseInt(readLine());
let arrA=readLine().split(" ");
let arrB=readLine().split(" ");
ston(arrA);
ston(arrB);
ntop(arrA);
ntop(arrB);
let maxA=max(arrA);
let maxB=max(arrB);
console.log(maxA*maxB);

