let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------

// name your function as changeDiagonal and it should take list as input
// function changeDiagonal(list){
//     for(let i=0;i<list.length;i++){
//         for (j=0;j<list.length;j++){
//             if(list[i][j]<0){
//                 list[i][j]=0;
//             }
//         }
//     }
//     return list;
// }
function changeDiagonal(list){
    let row=0;
    let column=0;
    while(column<list.length){
        if(list[row][column]<0){
            list[row][column]=0;
        }else{
            list[row][column]=1; 
        }
        row++;
        column++;
    }
    return list;
}

// Do not change anything below this line.

//Converting string to intger
function ConvertoInteger(arr){
	for(let index=0;index<arr.length;index++){
		arr[index]=parseInt(arr[index]);
	}
	return arr;
}


let n = parseInt(readLine());
let matrix = [];
for(let index=0;index<n;index++){
  let row=readLine().split(" ");
  row = ConvertoInteger(row);
  matrix.push(row);
}
let newMatrix = changeDiagonal(matrix);
for(row of newMatrix){
  console.log(...row);
}