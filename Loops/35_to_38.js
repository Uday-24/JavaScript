let i, j, size, pyramid;

size = 5;
for(i=1; i<=size; i++){
    pyramid = "";
    for(j=i; j<=size; j++){
        pyramid += " " + (j%2);
    }
    console.log(pyramid);
}

console.log();
console.log();

size = 5;
for(i=1; i<=size; i++){
    pyramid = "";
    for(j=i; j<=size; j++){
        pyramid += " " + (i%2);
    }
    console.log(pyramid);
}

console.log();
console.log();

size = 5;
for(i=1; i<=size; i++){
    pyramid = "";
    for(j=i; j<=size; j++){
        pyramid += " " + (i%2==0 ? 1 : 0);
    }
    console.log(pyramid);
}

console.log();
console.log();

size = 5;
for(i=1; i<=size; i++){
    pyramid = "";
    for(j=i; j<=size; j++){
        pyramid += " " + (j%2==0 ? 1 : 0);
    }
    console.log(pyramid);
}