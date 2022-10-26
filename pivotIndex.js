let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------


function pivotIndex(arr, piv) {
    // Implement this function
    if (arr.length < 3 || piv > arr.length - 1) {
        return -1;
    }
    let lsum = 0;
    let rsum = 0;
    for (let i = 0; i < piv; i++) {
        lsum += arr[i];
    }
    for (let i = piv + 1; i < arr.length; i++) {
        rsum += arr[i];
    }
    if (lsum == rsum) {
        return piv;
    } else {
        return pivotIndex(arr, piv + 1)
    }

}


// Do not edit anything below
let numElems = parseInt(readLine());
let nums = [];
for (let i = 0; i < numElems; i++) {
    nums.push(parseInt(readLine()));
}
console.log(pivotIndex(nums, 1));