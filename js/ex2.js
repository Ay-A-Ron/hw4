/* HW 4
   Example 2 JavaScript code
*/
console.log("Flowers' Output from HW 4 Example 2");

const fTempPrompt = Number(prompt('Input: Fahrenheit Temperature'));

const myFunction = (param1) => {
    celsius = (param1 - 32) * 5/9;
    return celsius

}

const celsConv = myFunction(fTempPrompt);

const cTemp = celsConv.toFixed(2);

console.log(`${fTempPrompt} degrees Fahrenheit = ${cTemp} degrees Celsius`);
console.log(`Temperature of ${fTempPrompt} Fahrenheit is equivalent to ${cTemp} degrees Celsius`);
console.log(`Water boiling temperature is 212 Fahrenheit or 100 degrees Celsius`);