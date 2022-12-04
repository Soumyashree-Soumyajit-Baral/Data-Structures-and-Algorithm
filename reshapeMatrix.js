var matrixReshape = function(mat, r, c) {
    let arr=[]
    let i=0;
    let j=0;
    while(i<mat.length){
        while(j<mat[0].length){
            arr.push(mat[i][j])
            j++
        }
        j=0
        i++;
    } 
    // console.log(arr)
    // let nr=parseInt(arr.length/r)
    if(mat.length*mat[0].length != r*c){
        return mat;
    }
    let newmat=[]
    for(let i=0;i<r;i++){
        newmat.push(arr.slice(i*c,i*c+c))
    }
    // console.log(newmat)
    return newmat
    
};