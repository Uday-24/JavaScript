function isArmStrong(num){
    let temp = num;
    let rem = 0;
    let total = 0;
    while(temp > 0){
        rem = temp % 10;
        total += rem**3;
        temp = Math.floor(temp/10);
    }
    if(total === num) return true;
    else return false;
}

console.log(isArmStrong(153));