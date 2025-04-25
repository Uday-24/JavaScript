let i, j, size, pyramid, str;

size = 5;
for(i=1; i<=size; i++){
    pyramid = "";
    for(j=i+1; j<=size; j++){
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
    for(j=i+1; j<=size; j++){
        pyramid += "  ";
    }
    for(j=i; j>=2; j--){
        pyramid += j + " ";
    }
    for(j=1; j<=i; j++){
        pyramid += j + " ";
    }
    console.log(pyramid);
}