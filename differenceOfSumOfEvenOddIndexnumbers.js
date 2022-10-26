let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------

// You should name your function as differenceOfSumOfEvenOddIndexnumbers
// It should take a list of integers
// Return an integer
function differenceOfSumOfEvenOddIndexnumbers(number){
    let evensum=0;
    let oddsum=0;
    for(let i=0;i<number.length;i++){
        if(i%2===0){
            evensum=evensum+number[i];
        }else{
            oddsum=oddsum+number[i];
        }
    }
    return (evensum-oddsum);
}


// Do not change anything below this line
function ConvertToNumber(list){
  for(let i=0;i<list.length;i++){
      list[i]=parseInt(list[i]);
  }
  
}


let numbers =readLine().split(" ");
ConvertToNumber(numbers);
console.log(differenceOfSumOfEvenOddIndexnumbers(numbers));