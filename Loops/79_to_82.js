let i, j, size, pyramid, str;

size = 5;
for(i=size; i>=1; i--){
    pyramid = "";
    for(j=i; j<size; j++){
        pyramid += "  ";
    }
    for(j=1; j<=i-1; j++){
        pyramid += j + " ";
    }
    for(j=i; j>=1; j--){
        pyramid += j + " ";
    }
    console.log(pyramid);
}

console.log();
console.log();

size = 5;
for(i=1; i<=size; i++){
    pyramid = "";
    for(j=1; j<i; j++){
        pyramid += "  ";
    }
    for(j=i; j<size; j++){
        pyramid += j + " ";
    }
    for(j=size; j>=i; j--){
        pyramid += j + " ";
    }
    console.log(pyramid);
}