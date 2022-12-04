var diagonalSum = function(mat) {
    let sum=0;
    let i=0;
    let j=mat.length-1
    while(j>=0){
        if(i==j){
            sum=sum+mat[i][j]
        }else{
            sum=sum+mat[i][i]+mat[i][j]
        }
        i++
        j--
    }
    return sum
    
};