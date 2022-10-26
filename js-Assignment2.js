let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}

let t= parseInt(readLine());
let moviearr=[];
for(let i=0;i<t;i++){
    let op=readLine();
    if(op=="add"){
        moviearr.push(readLine());
    }
    else if(op=="remove"){
        moviearr.pop();
    }
}
console.log(moviearr);

// function fMovie(op,moviearr){
    
//     if(op==="add"){
//         let inp=readLine();
//         moviearr.push(inp);
//     }
//     if(op==="remove"){
//         moviearr.pop();
//     }
//     return moviearr;
// }