function takeNumber (a) {
    if (a % 2 === 0) {
        const result1 = a/2;
        return result1;
    }
    else {
        const result2 = a*2;
        return result2;
    }
}

const result = takeNumber(5);
console.log(result);