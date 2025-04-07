const isPrime = (num) =>{
    if(num < 1){
        throw new Error("Only positive numbers");
    }

    for(let i=2; i<=Math.floor(num/2); i++){
        if(num%i == 0) return false;
    }

    return true;
}

console.log(isPrime(23))