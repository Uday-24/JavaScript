let i, j, pyramid;

size = 5;
for(i=size; i>=1; i--){
    pyramid = "";
    for(j=i; j<=size; j++){
        pyramid += i + " ";
    }
    console.log(pyramid);
}

console.log();
console.log();

size = 5;
k = 1;
for(i=1; i<=size; i++){
    pyramid = "";
    for(j=1; j<=i; j++){
        pyramid += k + " ";
        k++;
    }
    k--;
    console.log(pyramid);
}

console.log();
console.log();

size = 5;
for(i=size; i>=1; i--){
    pyramid = "";
    for(j=1; j<=i; j++){
        pyramid += j + " ";
    }
    console.log(pyramid);
}

console.log();
console.log();

size = 5;
for(i=1; i<=size; i++){
    pyramid = "";
    for(j=size; j>=i; j--){
        pyramid += j + " ";
    }
    console.log(pyramid);
}

console.log();
console.log();

size = 5;
for(i=1; i<=size; i++){
    pyramid = "";
    for(j=i; j<=size; j++){
        pyramid += j + " ";
    }
    console.log(pyramid);
}

console.log();
console.log();

size = 5;
for(i=size; i>=1; i--){
    pyramid = "";
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
    for(j=i; j<=size; j++){
        pyramid += (j%2) + " ";
    }
    console.log(pyramid);
}

console.log();
console.log();

size = 5;
for(i=1; i<=size; i++){
    pyramid = "";
    for(j=i; j<=size; j++){
        pyramid += i + " ";
    }
    console.log(pyramid);
}