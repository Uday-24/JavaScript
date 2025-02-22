function asyncFunction(id) {
    return new Promise((res, rej) => {
        setTimeout(() => {
            console.log("Data " + id);
            res("success");
        }, 2000);
    });
}



// console.log("Fetching data 1...");
// asyncFunction(1).then((res)=>{
//     console.log("Fetching data 2...");
//     asyncFunction(2).then((res)=>{
//         console.log("Fetching data 3...");
//         asyncFunction(3);
//     });
// });


console.log("Fetching data 1...");
asyncFunction(1)
    .then((res) => {
        console.log(res);
        console.log("Fetching data 2...");
        return asyncFunction(2);
    }).then((res) => {
        console.log(res);
        console.log("Fetching data 3...");
        return asyncFunction(3);
    })