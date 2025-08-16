function generateNum (num1, num2) {
    return Math.floor(Math.random() * (num2-num1+1)) + num1;
}

const rand = generateNum(10, 20);
console.log(rand);