// Name = Shubham Sangawat

function bubbleSort(array) {
  const animations = [];
  if(array.length<=1) return array;
  bubbleSortHelper(array,array.length,animations);
  return animations;
}

function bubbleSortHelper(mainArray,len,animations){
  let i, j;
  for (i = 0; i < len; i++){
    for (j = 0; j < len - i - 1; j++){
      animations.push([j,j+1,'compare']);
      if (mainArray[j] > mainArray[j + 1]){
        animations.push([[j,mainArray[j]],[j+1,mainArray[j+1]],'swap']);
        let temp = mainArray[j];
        mainArray[j] = mainArray[j+1];
        mainArray[j+1] = temp;
      }
      animations.push([j,j+1,'normal']);
    }
    animations.push([j,0,'sorted']);
  }     
}

export default bubbleSort;