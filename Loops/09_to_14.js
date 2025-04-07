let i,j, pyramid;
size = 5;

for(i=1; i<=size; i++){
    pyramid = "";
    for(j=1; j<=i; j++){
        pyramid += " " + i; 
    }
    console.log(pyramid);
}


console.log();
console.log();

size = 5;
for(i=size; i>=1; i--){
    pyramid = "";
    for(j=i; j<=size; j++){
        pyramid += " " + i;
    }
    console.log(pyramid);
}

console.log();
console.log();

str = "abcde";
size = str.length;

for(i=1; i<=size; i++){
    pyramid = "";
    for(j=1; j<=i; j++){
        pyramid += " " + str[i-1];
    }
    console.log(pyramid);
}

console.log();
console.log();

str = "ABCDE";
size = str.length;

for(i=1; i<=size; i++){
    pyramid = "";
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
    for(j=i; j<=size; j++){
        pyramid += " " + str[i-1];
    }
    console.log(pyramid);
}