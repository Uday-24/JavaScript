const arr = [
  [ 1, 1, 1, 0, 0, 0 ],
  [ 0, 1, 0, 0, 0, 0 ],
  [ 1, 1, 1, 0, 0, 0 ],
  [ 0, 0, 2, 4, 4, 0 ],
  [ 0, 0, 0, 2, 0, 0 ],
  [ 0, 0, 1, 2, 4, 0 ]
]

let r1 = [];
let r2 = [];
let r3 = [];
let hourglasses = [];
let tempArr = [];
for(let i=0; i<arr.length - 2; i++){
    // console.log(arr[i]);
    r1 = arr[i];
    r2 = arr[i+1];
    r3 = arr[i+2];
    for(let j=0; j<r1.length; j++){
        // console.log(arr[i][j]);
        for(let k=j; k<=j+2; k++){
            // console.log(r1[k]);
            tempArr.push(r1[k]);
            tempArr.push(r3[k]);
        }
        tempArr.push(r2[j+1]);
        hourglasses.push(tempArr);
        tempArr = [];
    }
}

// console.log(hourglasses);