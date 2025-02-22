const checkUserInput = (userInput) =>{
    let ui = userInput.toUpperCase()
    if(ui ==="S" || ui ==="W" || ui === "G"){
        return true
    }else{
        return false
    }
}

const userInput = () =>{
    let userI;
    do{
        userI = prompt("Enter S, W, or G.");
        if(!checkUserInput(userI)){
            alert("Invalid input");
        }
    }while(!checkUserInput(userI));
    return userI.toUpperCase();
}

let ui = userInput();
let ci = Math.floor(Math.random() * 3)
ci = ["S", "W", "G"][ci]

console.log("You " + ui);
console.log("Computer " + ci);

if(ci === ui){
    console.log("Draw");
}
else if(ci === "S" && ui === "W"){
    console.log("Computer win");
}
else if(ci === "W" && ui === "G" ){
    console.log("Computer win");
}
else if(ci === "G" && ui === "S"){
    console.log("Computer win");
}
else{
    console.log("You win");
}