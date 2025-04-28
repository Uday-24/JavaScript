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

str = "abcde";
size = str.length;
for(i=1; i<=size; i++){
    pyramid = "";
    for(j=i+1; j<=size; j++){
        pyramid += "  ";
    }
    for(j=1; j<i; j++){
        pyramid += str[j-1] + " ";
    }
    for(j=i; j>=1; j--){
        pyramid += str[j-1] + " ";
    }
    console.log(pyramid);
}

console.log();
console.log();

str = "ABCDE";
size = str.length;
for(i=1; i<=size; i++){
    pyramid = "";
    for(j=i+1; j<=size; j++){
        pyramid += "  ";
    }
    for(j=1; j<i; j++){
        pyramid += str[j-1] + " ";
    }
    for(j=i; j>=1; j--){
        pyramid += str[j-1] + " ";
    }
    console.log(pyramid);
}

console.log();
console.log();

str = "abcde";
size = str.length;

for(i=size; i>=1; i--){
    pyramid = "";
    for(j=1; j<i; j++){
        pyramid += "  ";
    }
    for(j=size; j>i; j--){
        pyramid += str[j-1] + " ";
    }
    for(j=i; j<=size; j++){
        pyramid += str[j-1] + " ";
    }
    console.log(pyramid);
}

console.log();
console.log();

str = "ABCDE";
size = str.length;
for(i=size; i>=1; i--){
    pyramid = "";
    for(j=1; j<i; j++){
        pyramid += "  ";
    }
    for(j=i; j<=size-1; j++){
        pyramid += str[j-1] + " ";
    }
    for(j=size; j>=i; j--){
        pyramid += str[j-1] + " ";
    }
    console.log(pyramid);
}

console.log();
console.log();

size = 5;
for(i=size; i>=1; i--){
    pyramid = "";
    for(j=1; j<i; j++){
        pyramid += "  ";
    }
    for(j=size; j>i; j--){
        pyramid += j + " ";
    }
    for(j=i; j<=size; j++){
        pyramid += j + " ";
    }
    console.log(pyramid);
}