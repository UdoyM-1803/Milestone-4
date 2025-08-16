function make_avg (num1, num2) {
    let sum = 0;
    for (const number of num1) {
        sum = sum + number;
    }
    const avg = sum / num2;
    return avg;
}

const arr = [23, 57, 47, 32, 86, 17];
const value = make_avg(arr, arr.length);
console.log(value.toFixed(2));