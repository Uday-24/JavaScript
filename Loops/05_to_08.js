let i, j, py;

console.log("----------");

let s = "abcde"
let size = s.length

for(i=1; i<=size; i++){
    py = "";
    for(j=1; j<=i; j++){
        py += s[j-1] + " ";
    }
    console.log(py);
}

console.log("----------");

s = "ABCDE";
size = s.length;

for(i=1; i<=size; i++){
    py = "";
    for(j=1; j<=i; j++){
        py += s[j-1] + " ";
    }
    console.log(py);
}

console.log("----------");

s = "abcde";
size = s.length;

for(i=1; i<=size; i++){
    py = "";
    for(j=i; j>=1; j--){
        py += s[j-1] + " ";
    }
    console.log(py);
}

console.log("----------");

s = "ABCDE";
size = s.length;

for(i=1; i<=size; i++){
    py = "";
    for(j=i; j>=1; j--){
        py += s[j-1] + " ";
    }
    console.log(py);
}

console.log("----------");