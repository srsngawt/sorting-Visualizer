// Name = Shubham Sangawat

function quickSort(array) {
    const animations = [];
    if(array.length<=1) return array;
    quickSortHelper(array,0,array.length-1,animations);
    return animations;
}

function quickSortHelper(mainArray,startIdx,endIdx,animations){
    if(startIdx>endIdx)    return ;
    let pi = partition(mainArray,startIdx,endIdx,animations);
    quickSortHelper(mainArray,startIdx,pi-1,animations);
    quickSortHelper(mainArray,pi+1,endIdx,animations);
}

function partition(mainArray,startIdx,endIdx,animations){
    let pivot = mainArray[endIdx];
    animations.push([endIdx,0,'pivot'])
    let i = startIdx - 1;
    for(let j=startIdx;j<=endIdx-1;j++){
        animations.push([j,0,'compare']);
        if(mainArray[j]<pivot){
            i++;
            animations.push([[i,mainArray[i]],[j,mainArray[j]],'swap']);
            let temp = mainArray[j];
            mainArray[j]=mainArray[i];
            mainArray[i]=temp;
            animations.push([j,i,'normal']);
        }
        animations.push([j,-1,'normal']);
    }
    
    animations.push([[i+1,mainArray[i+1]],[endIdx,mainArray[endIdx]],'swap']);
    animations.push([i+1,endIdx,'normal']);
    animations.push([i+1,-1,'sorted']);
    let temp = mainArray[i+1];
    mainArray[i+1]=mainArray[endIdx];
    mainArray[endIdx]=temp;
    return (i+1);
}

export default quickSort;