let i, j, size, pyramid, str;

str = "ABCDE";
size = str.length;

for(i=1; i<=size; i++){
    pyramid = "";
    for(j=i+1; j<=size; j++){
        pyramid += "  ";
    }
    for(j=1; j<=i; j++){
        pyramid += " " + str[j-1];
    }
    console.log(pyramid);
}

console.log();
console.log();

str = "abcde";
size = str.length;

for(i=1; i<=size; i++){
    pyramid = "";
    for(j=i+1; j<=size; j++){
        pyramid += "  ";
    }
    for(j=1; j<=i; j++){
        pyramid += " " + str[j-1];
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
    for(j=1; j<=i; j++){
        pyramid += " " + str[i-1];
    }
    console.log(pyramid);
}

console.log();
console.log();

str = "abcde";
size = str.length;

for(i=size; i>=1; i--){
    pyramid = "";
    for(j=2; j<=i; j++){
        pyramid += "  ";
    }
    for(j=i; j<=size; j++){
        pyramid += " " + str[i-1];
    }
    console.log(pyramid);
}

console.log();
console.log();

str = "ABCDE";
size = str.length;

for(i=size; i>=1; i--){
    pyramid = "";
    for(j=2; j<=i; j++){
        pyramid += "  ";
    }
    for(j=i; j<=size; j++){
        pyramid += " " + str[i-1];
    }
    console.log(pyramid);
}