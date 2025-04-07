const getFactorial = (num) =>{
    let fact = 1;
    if(num == 1 || num == 0){
        return fact;
    }else if(num > 1){
        for(let i=num; i>=2; i--){
            fact *= i;
        }
        return fact;
    }else{
        throw new Error("Input only positive integers");
    }
}

let num = prompt("Enter number");
console.log(getFactorial(num));