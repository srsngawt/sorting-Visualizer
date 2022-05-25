// Name = Shubham Sangawat

function mergeSort(array) {
    const animations = [];
    if(array.length<=1) return array;
    const auxArray = array.slice();
    mergeSortHelper(array,0,array.length-1,auxArray,animations);
    return animations;
}

function mergeSortHelper(mainArray, startIdx, endIdx, auxArray, animations){
    if(startIdx === endIdx) return ;
    const middle = Math.floor((startIdx + endIdx)/2);
    mergeSortHelper(auxArray, startIdx, middle, mainArray, animations);
    mergeSortHelper(auxArray, middle+1, endIdx, mainArray, animations);
    Merge(mainArray,startIdx,middle,endIdx,auxArray,animations);
}

function Merge(mainArray,startIdx,middle,endIdx,auxArray,animations){
    let k=startIdx;
    let i = startIdx;
    let j=middle+1;
    while(i<=middle && j<=endIdx){
        animations.push([i,j]);
        animations.push([i,j]);

        if(auxArray[i]<=auxArray[j]){
            animations.push([k,auxArray[i]]);
            mainArray[k++]=auxArray[i++];
        }
        else{
            animations.push([k,auxArray[j]]);
            mainArray[k++]=auxArray[j++];
        }
    }
    while(i<= middle){
        animations.push([i,i]);
        animations.push([i,i]);
        animations.push([k,auxArray[i]]);
        mainArray[k++]=auxArray[i++];
    }
    while(j<= endIdx){
        animations.push([j,j]);
        animations.push([j,j]);
        animations.push([k,auxArray[j]]);
        mainArray[k++]=auxArray[j++];
    }
}

export default mergeSort;