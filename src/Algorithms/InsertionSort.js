// Name = Shubham Sangawat

function insertionSort(array) {
    const animations = [];
    if(array.length<=1) return array;
    insertionSortHelper(array,array.length,animations);
    return animations;
  }
  
  function insertionSortHelper(mainArray,len,animations){
    let i, key, j,k;
    for (i = 1; i < len; i++)
    {
        key = mainArray[i];
        j = i - 1;
        while (j >= 0 && mainArray[j] > mainArray[j+1])
        {
            animations.push([j+1,j,'comp']);
            animations.push([[j+1,mainArray[j+1]],[j,mainArray[j]],'sp']);
            animations.push([j+1,-1,'normal']);
            let temp= mainArray[j+1];
            mainArray[j + 1] = mainArray[j];
            mainArray[j]=temp;
            j = j - 1;
        }
        animations.push([j+1,-1,'normal']);
        mainArray[j + 1] = key;
    }
    for(k=0;k<len && i===len;k++){
      animations.push([k,-1,'sorted']);
    }
  }
  
  export default insertionSort;