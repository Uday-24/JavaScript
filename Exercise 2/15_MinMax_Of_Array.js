function getMax(arr) {
    let maxVal = arr[0];
    for (let i of arr) {
        if (i > maxVal) {
            maxVal = i;
        }
    }
    return maxVal;
}

function getMin(arr) {
    let minVal = arr[0];
    for(let i of arr){
        if(i < minVal){
            minVal = i;
        } 
    }
    return minVal;
}

const arr = [7, 2, 5, 3, 4]

console.log(getMax(arr));
console.log(getMin(arr));