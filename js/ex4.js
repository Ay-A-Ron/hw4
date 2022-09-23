/* HW 4
   Example 4 JavaScript code
*/
console.log("Flowers' Output from HW 4 Example 4");

const values = [3, 11, 7, 2, 9, 10];

const maxVal = Math.max(...values);
const minVal = Math.min(...values);

const mathFunction = (param1) => {
    let addSum = 0;
    for(i = 0; i < param1.length; i++) {
        addSum += param1[i];
    }
    return addSum;
};

const doIt = mathFunction(values);
console.log(`The sum of the array is: ${doIt}`);
console.log(`The max value of the array is: ${maxVal}`);
console.log(`The min value of the array is: ${minVal}`);