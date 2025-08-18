const heights2 = [167, 190, 120, 165, 137];

function getLowNumber (numbers) {
    let low = numbers[0];
    for (const num of numbers) {
        if (num < low) {
            low = num;
        }
    }
    return low;
}

const result = getLowNumber(heights2);
console.log(result);