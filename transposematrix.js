let fs = require("fs");
const { listenerCount } = require("process");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------

// you should return a list of lists
function transposeMatrix(matrix){
	//implement this function
    let arr=[];
    for(let i=0;i<matrix[0].length;i++){
        let arr1=[];
        for(let j=0;j<matrix.length;j++){
            arr1.push(matrix[j][i]);
        }
        arr[i]=arr1;
        arr1=[];
    }
    // console.log(arr);
    return arr;
}

// function transposeMatrix(matrix) {
//     //implement this function
//     let output = [];
//     let count = 0;
//     let start = 0;
//     while (count < matrix[0].length) {
//         start = 0;
//         let current_array = [];
//         while (start < matrix.length) {
//             current_array.push(matrix[start][count]);
//             start++;
//         }
//         output.push(current_array);
//         count++
//     }
//     return output;
// }



// do not change anything below this line
let m = parseInt(readLine());
let matrix = [];
for (let index = 0; index < m; index++) {
    let row = readLine().split(" ");
    matrix.push(row);
}
let result = transposeMatrix(matrix);
for (row of result) {
    console.log(...row);
}