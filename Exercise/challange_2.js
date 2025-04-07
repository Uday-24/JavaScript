// Hash Tag Generator

const hastTagGenerator = (str) =>{
    if(str.length > 280 || str.trim() === ""){
        return false;
    }

    str = str.split(" ");
    str = str.map((currElem)=> {
        // return currElem.replace(currElem[0], currElem[0].toUpperCase());
        return currElem.charAt(0).toUpperCase() + currElem.slice(1);
    });

    return `#${str.join("")}`;
}

console.log(hastTagGenerator("Hello my name is uday"));
