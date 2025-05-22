function power(n, p){
    let ans = n;
    while(p > 1){
        ans *= n;
        p--;
    }
    return ans;
}

console.log(power(2,5));