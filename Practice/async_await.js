function getData(id){
    return new Promise((res, rej)=>{
        setTimeout(()=>{
            console.log("data " + id);
            res(200);
        },2000)
    });
}

async function getWheatherData(){
    await getData(1);
    await getData(2);
    await getData(3);
}

getWheatherData();