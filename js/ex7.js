/* HW 4
   Example 7 JavaScript code
*/
console.log("Flowers' Output from HW 4 Example 7");

const numGen = Math.floor(Math.random() * 100) + 1;

console.log(numGen);

let input = Number(prompt(`Please enter a number from 1-100`))

let guessCount = 0

while(input !== numGen) {
    if(input > numGen){
        guessCount++ ; 
        alert('Too high, guess again');
        console.log(guessCount);
        input = Number(prompt(`Please enter a number from 1-100:`))
    }
    else if(input < numGen) {
        guessCount++ ; 
        alert('Too low, guess again');
        console.log(guessCount);
        input = Number(prompt(`Please enter a number from 1-100:`))
    } 

    if(input == numGen){
        guessCount++ ; 
        alert(`You got it! The number was ${numGen}. It took you ${guessCount} tries.`)
    }
}