/**
 * Objective: Write a function to give me the sum of all numbers in an array
 * step-1: Declare a function
 * step-2: Call check whether the function is called properly
 * step-3: Set a parameter(s)
 * step-4: Pass the parameter(s), check whether parameter is passed in a proper format
 * step-5: Do the function tasks (step by step)
*/

function sumOfNumbers(numbers) {
    let sum = 0;
    for (const number of numbers) {
        console.log(number);
        sum = sum + number;
    }
    return sum;
}
const nums = [52, 62, 12, 6];
const sum = sumOfNumbers(nums);
console.log('Sum of numbers is ', sum);