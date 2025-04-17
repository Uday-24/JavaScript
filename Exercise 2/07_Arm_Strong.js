const isArmStrong = (num) => {
    let temp = num;
    let total = 0;
    if (num > 0) {
        while (temp > 0) {
            let rem = temp % 10;
            total += (rem ** 3)
            temp = Math.floor(temp / 10);
        }
        if (total == num) {
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }
}

let num = 153;
console.log(isArmStrong(num));