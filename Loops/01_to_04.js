size = 5;
for(let i=1; i<=size; i++){
    let pyramid = "";

    for(let j=1; j<=i; j++){
        pyramid += j + " "
    }

    console.log(pyramid)
}

console.log("----------");

size = 5
for(let i=size; i>=1; i--){
    let pyramid = "";
    for(let j=size; j>=i; j--){
        pyramid += j + " "
    }
    console.log(pyramid);
}

console.log("----------");

size = 5
for(let i=1; i<=5; i++){
    let py = "";
    for(let j=i; j>=1; j--){
        py += j + " "
    }
    console.log(py);   
}

console.log("----------");

size = 5;
for(let i=size; i>=1 ; i--){
    let py = "";
    for(let j=i; j<=size ; j++){
        py += j + " ";
    }
    console.log(py);
}