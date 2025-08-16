const numbers = [12, 98, 5, 41, 23, 78, 46];

const arr = [];
for (const number of numbers) {
    if (number%2 == 0) {
        arr.push(number);
    }
}
console.log(arr);