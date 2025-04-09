const fibonacci = (limit) =>{
    let t1 = 0;
    let t2 = 1;
    let t3 = t1 + t2;

    if(limit <= 0){
        console.log("Please enter positive numbers only");
    }else if(limit == 1){
        console.log(t1);
    }else{
        let result = t1 + " " + t2 + " ";
        for(let i=3; i<=limit; i++){
            result += t3 + " ";
            t1 = t2;
            t2 = t3;
            t3 = t1 + t2;
        }
        console.log(result);
    }
}

fibonacci(20);