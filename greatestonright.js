let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------

function replaceElements(arr){
    // Implement this function
    let arr1=[];
    for(let i=0;i<arr.length-1;i++){
        let max=0;
        for(let j=i+1;j<arr.length;j++){
            if(max<arr[j]){
                max=arr[j];
            }
        }
        arr1.push(max);
        max=0;

    }
    arr1.push(-1);
    return arr1;    
}

// Do not edit anything below
let numElems = parseInt(readLine());
let arr = [];
for (let index=0;index<numElems;index++){
        arr.push(parseInt(readLine()));
}
let res=replaceElements(arr);
for(elem of res){
  console.log(elem);
}