const getData = (id, callback) => {
    setTimeout(() => {
        console.log(id);
        if(callback){
            callback();
        }
    }, 2000);
}

getData(1, ()=>{
    getData(2, ()=>{
        getData(3)
    })
});