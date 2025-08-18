const heights = [65, 66, 68, 72, 78, 59, 53, 65, 66];

function getMax(numbers) {
    let max = numbers[0];
    for (const num of numbers) {
        if (num > max) {
            max = num;
        }
    }
    return max;
}

function getMin (numbers) {
    let min = numbers[0];
    for (const num of numbers) {
        if (num < min) {
            min = num;
        }
    }
    return min;
}

const max = getMax(heights);
console.log('Maximum value is ', max);


const min = getMin(heights);
console.log('Minimum value is ', min);