function bubbleSort(arr){
    let len = arr.length;
    for(let i=1; i < len; i++){
        for(let j=0; j < len-i; j++){
            if(arr[j] > arr[j+1]){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    return arr;
}

function selectionSort(arr){
    let len = arr.length;
    for(let i=0; i<=len-2; i++){
        for(j=i+1; j<=len-1; j++){
            if(arr[i] > arr[j]){
                let temp = arr[j];
                arr[j] = arr[i];
                arr[i] = temp;
            }
        }
    }
    return arr;
}

console.log(selectionSort([4, 1, 5, 2, 3, 9, 8, 5, 4, 7]));