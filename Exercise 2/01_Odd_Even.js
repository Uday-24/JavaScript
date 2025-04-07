let num = prompt("Enter number");

if(num>=1){
    console.log( num%2==0 ? "Even" : "Odd" );
}else{
    console.log("Only positive integers are allowed");
}