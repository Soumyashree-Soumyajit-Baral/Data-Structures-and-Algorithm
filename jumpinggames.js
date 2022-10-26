let fs = require("fs");
// const { Z_NO_COMPRESSION } = require("zlib");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1];
}

function noofjumps(arr,n){
    if(n===1){
        return 0;
    }
    let result=n;
    for(let i=n-2;i>=0;i--){
        if(i+arr[i]>=n-1){
            let tempres=noofjumps(arr,i+1);
            if(tempres!=n){
                result= Math.min(result,tempres+1);
            }
        }
    }
    return result;
}
let n=parseInt(readLine());
let arr=readLine().split(" ");
for(let i=0;i<n;i++){
    arr[i]=parseInt(arr[i]);
}
console.log(noofjumps(arr,n));
