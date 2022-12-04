var luckyNumbers  = function(matrix) {
    let lucky=[]
    for(let i=0;i<matrix.length;i++){
        let rowMin=matrix[i][0]
        let minIdx=0
        for(let j=0;j<matrix[i].length;j++){
            if(matrix[i][j]<rowMin){
                rowMin=matrix[i][j]
                minIdx=j
            }
        }
        let colMax=-99999
        for(let k=0;k<matrix.length;k++){
            colMax=Math.max(colMax,matrix[k][minIdx])
        }
        if(rowMin===colMax){
            lucky.push(rowMin)
            break;
        }
    }
    return lucky
    
};

