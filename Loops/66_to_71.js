let i, j, size, str, pyramid;

size = 5;
for(i=1; i<=size; i++){
    pyramid = "";
    for(j=i+1; j<=size; j++){
        pyramid += " ";
    }
    for(j=1; j<=i; j++){
        pyramid += j + " ";
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
        pyramid += " ";
    }
    for(j=1; j<=i; j++){
        pyramid += str[j-1] + " ";
    }
    console.log(pyramid);
}

console.log();
console.log();

size = 5;
for(i=1; i<=size; i++){
    pyramid = "";
    for(j=1; j<=i; j++){
        pyramid += "* ";
    }
    console.log(pyramid);
}

console.log();
console.log();

size = 5;
for(i=1; i<=size; i++){
    pyramid = "";
    for(j=i+1; j<=size; j++){
        pyramid += " ";
    }
    for(j=1; j<=i; j++){
        pyramid += "* ";
    }
    console.log(pyramid);
}

console.log();
console.log();

for(i=65; i<=69; i++){
    pyramid = "";
    for(j=i+1; j<=69; j++){
        pyramid += " ";
    }
    for(j=65; j<=i; j++){
        pyramid += String.fromCharCode(j) + " ";
    }
    console.log(pyramid);
}

console.log();
console.log();

for(i=101; i>=97; i--){
    pyramid = "";
    for(j=97; j<i; j++){
        pyramid += " ";
    }
    for(j=101; j>=i; j--){
        pyramid += String.fromCharCode(j) + " ";
    }
    console.log(pyramid);
}