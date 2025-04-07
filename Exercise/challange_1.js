// Find the longest word

const longestWord = (str) =>{
    if(str.trim().length === 0){
        return false;
    }

    // Method 1
    // words = str.split(" ");
    // let longestWord = "";
    // for (let i of words) {
    //     if(longestWord.length < i.length){
    //         longestWord = i;
    //     }
    // }
    // return longestWord;

    // Method 2
    // words = str.split(" ");
    // sortedWords = words.sort((a,b)=>b.length - a.length);
    // return sortedWords[0];

    // Method 3
    words = str.split(" ");
    return words.reduce((accu, cur)=> (accu.length > cur.length ? accu : cur), " " );
}

str = "Hello my name is uday";
console.log(`'${longestWord(str)}' is the longest word with ${longestWord(str).length} characters`);