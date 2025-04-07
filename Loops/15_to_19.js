let i,j,pyramid;

size = 5;
let c = 1;
for(i=1; i<=size; i++){
    pyramid = "";
    for(j=1; j<=i; j++){
        pyramid += " " + c;
        c++;
    }
    console.log(pyramid);
}

console.log();
console.log();

size = 5;

for(i=1; i<=size; i++){
    pyramid = "";
    for(j=i; j>=1; j--){
        pyramid += " " + (j%2);
    }
    console.log(pyramid);
}

console.log();
console.log();

size = 5;

for(i=1; i<=size; i++){
    pyramid = "";
    for(j=i; j>=1; j--){
        pyramid += " " + (j%2==0 ? 1 : 0);
    }
    console.log(pyramid);
}

console.log();
console.log();

size = 5;
for(i=1; i<=size; i++){
    pyramid = "";
    for(j=1; j<=i; j++){
        pyramid += (i%2==0 ? 1 : 0) + " ";
    }
    console.log(pyramid);
}