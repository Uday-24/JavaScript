function reverseNumber(num){
    let reverse_num = 0; 
    let rem = 0;
    while(num > 0){
        rem = num % 10;
        reverse_num = reverse_num * 10 + rem;
        num = Math.floor(num / 10); 
    }

    return reverse_num;
}

console.log(reverseNumber(4654897));