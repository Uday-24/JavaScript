function sumOfDigits(num){
    let sum = 0;
    let rem;
    while(num > 0){
        rem = num % 10;
        sum += rem;
        num = Math.floor(num / 10);
    }
    return sum;
}

console.log(sumOfDigits(123));