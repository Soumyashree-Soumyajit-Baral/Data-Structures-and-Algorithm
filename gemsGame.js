let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------
// function ston(arr){
//     for(let i=0;i<arr.length;i++){
//         arr[i]=parseInt(arr[i])
//     }
// }
let t = parseInt(readLine())
let arr = readLine().split(" ").map(Number)
for (let i = 0; i < n; i++) {
    let min = Math.min(...arr)
    let r = arr[0]
    let g = arr[1]
    let b = arr[2]
    let nOfTurns = min
    r = r - min
    g = g - min
    b = b - min
    if (r % 2 === 0) {
        nOfTurns = nOfTurns + parseInt(r / 2)
    } else {
        nOfTurns = nOfTurns + parseInt(r / 2) + 1
    }
    if (g % 2 === 0) {
        nOfTurns = nOfTurns + parseInt(g / 2)
    } else {
        nOfTurns = nOfTurns + parseInt(g / 2) + 1
    }
    if (b % 2 === 0) {
        nOfTurns = nOfTurns + parseInt(b / 2)
    } else {
        nOfTurns = nOfTurns + parseInt(b / 2) + 1
    }
    console.log(nOfTurns)
}