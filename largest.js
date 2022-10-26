let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------

function largestElement(A){
    // Code here
    // let sortedlist= A.sort((a,b)=>(a-b));
    // return sortedlist[A.length-1];
    let largest=0;
    for(let i=0;i<A.length-1;i++){
        if(A[i]>A[i+1]){
            largest=A[i];
        }else{
            largest=A[i+1];
        }
    }
    return largest;
}
// --------- Do NOT edit Below this line -----------
function ConvertToNumber(list){
  for(let each in list){
      list[each]=Number(list[each]);
  } 
}

let n = parseInt(readLine());
let A=readLine().split(" ");
ConvertToNumber(A);
console.log(largestElement(A));