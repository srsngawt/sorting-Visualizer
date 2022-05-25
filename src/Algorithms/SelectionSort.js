// Name = Shubham Sangawat

function selectionSort(array) {
    const animations = [];
    if(array.length<=1) return array;
    selectionSortHelper(array,array.length,animations);
    return animations;
  }
  
  function selectionSortHelper(mainArray,len,animations){
    let i, j, min_idx;
    for (i = 0; i < len-1; i++)
    {
        min_idx = i;
        for (j = i+1; j < len; j++){
            animations.push([j,min_idx,'compare']);
            if (mainArray[j] < mainArray[min_idx]){
                animations.push([min_idx,-1,'normal']);  
                min_idx = j;
            }
            animations.push([j,-1,'normal']);  
        }
        animations.push([[min_idx,mainArray[min_idx]],[i,mainArray[i]],'swap']);
        let temp = mainArray[i];
        mainArray[i] = mainArray[min_idx];
        mainArray[min_idx] = temp;
        animations.push([[min_idx],[i],'normal']);
        animations.push([i,0,'sorted']);
    }
    animations.push([i,0,'sorted']);
  }
  
  export default selectionSort;