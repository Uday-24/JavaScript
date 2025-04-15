let i, j, size, pyramid, str;

str = "abcde";
size = str.length;

for(i=size; i>=1; i--){
    pyramid = "";
    for(j=1; j<=i; j++){
        pyramid += str[j-1] + " ";
    }
    console.log(pyramid);
}

console.log();
console.log();

str = "abcde";
size = str.length;

for(i=1; i<=size; i++){
    pyramid = "";
    for(j=i; j<=size; j++){
        pyramid += str[j-1] + " ";
    }
    console.log(pyramid);
}

console.log();
console.log();

for(i=69; i>=65; i--){
    pyramid = "";
    for(j=65; j<=i; j++){
        pyramid += String.fromCharCode(j) + " ";
    }
    console.log(pyramid);
}

console.log();
console.log();

str = "ABCDE";
size = str.length;
for(i=1; i<=size; i++){
    pyramid = "";
    for(j=i; j<=size; j++){
        pyramid += str[j-1] + " ";
    }
    console.log(pyramid);
}

console.log();
console.log();

str = "abcde";
size = str.length;
for(i=1; i<=size; i++){
    pyramid = "";
    for(j=i; j<=size; j++){
        pyramid += str[i-1] + " ";
    }
    console.log(pyramid);
}

console.log();
console.log();

for(i=101; i>=97; i--){
    pyramid = "";
    for(j=97; j<=i; j++){
        pyramid += " " + String.fromCharCode(i);
    }
    console.log(pyramid);
}

console.log();
console.log();

for(i=65; i<=69; i++){
    pyramid = "";
    for(j=i; j<=69; j++){
        pyramid += " " + String.fromCharCode(i);
    }
    console.log(pyramid);
}

console.log();
console.log();

for(i=69; i>=65; i--){
    pyramid = "";
    for(j=65; j<=i; j++){
        pyramid += " " + String.fromCharCode(i);
    }
    console.log(pyramid);
}