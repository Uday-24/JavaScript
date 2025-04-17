const isPalindrome = (num) => {
    let reversed = 0;
    let temp = num;

    while(temp > 0){
        let rem = temp % 10;
        reversed = (reversed*10) + rem;
        temp /= 10;
        temp = Math.floor(temp);
    }
    if(reversed == num) return true;
    else return false;
}

let num = 131;
console.log(isPalindrome(num));