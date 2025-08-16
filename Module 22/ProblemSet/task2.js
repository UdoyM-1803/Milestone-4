function findNumber (fixnumber) {
    const array = [5,6,11,12,98, 5];
    let count = 0;
    for (const number of array) {
        if (number === fixnumber) {
            count++;
        }
    }
    return count;
}

const result = findNumber(5);
console.log(result);
const result1 = findNumber(25);
console.log(result1);
const result2 = findNumber(12);
console.log(result2);