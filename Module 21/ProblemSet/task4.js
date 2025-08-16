function count_zero (number) {
    let count = 0;
    for (const len of number) {
        if (len === '0') {
            count++;
        }
    }
    return count;
}

const binStr = '1011100000101011010'
const zero = count_zero(binStr)
console.log(zero);