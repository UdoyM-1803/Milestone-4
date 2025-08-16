/**
 * function takes an array as parameter
 * give me the average of the odd numbers in the array
*/

function oddAverage(numbers) {
    const odds = [];
    for (const number of numbers) {
        if (number % 2 === 1) {
            odds.push(number);
        } 
    }
    let sum = 0;
    for (const number of odds) {
        sum = sum + number;
    }
    const count = odds.length;
    console.log(sum, count);
    const avg = sum / count;
    return avg;
}

const number = [42,23,345,46,24,475,73];
const avg = oddAverage(number);
console.log('Average of the odd numbers is ', avg);