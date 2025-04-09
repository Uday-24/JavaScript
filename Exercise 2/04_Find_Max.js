const findLargest = (arr) => {
    size = arr.length;
    let max = arr[0];
    for(let i=0; i<size; i++){
        if(arr[i] > max){
            max = arr[i];
        }
    }
    return max;
}

let maxNum = findLargest([1, 2, 5, 3, 4]);
console.log(maxNum);