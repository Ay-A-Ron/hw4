/* HW 4
   Example 2 JavaScript code
*/
console.log("Flowers' Output from HW 4 Example 5");

let wordStop = "" ;
let wordArray = [];

while (wordStop.toLowerCase() !== "stop"){
    wordStop = prompt("Enter words. Type 'stop' to terminate the program");

    wordArray.push(wordStop);
    if (wordArray[0].toLowerCase() == "stop"){
        alert("No words to display, Stop was the first word entered.");
        break
    }
}

wordArray.pop();
console.log(`You entered the following words: ${wordArray}`);



