const salman = 95;
const tisha = 56;

if (tisha > salman) {
    console.log('Tisha will get the strawberry');
}
else {
    console.log('Salman will eat the strawberry');
}


// Inside a function
function getMax (num1, num2) {
    if (num1 > num2) {
        return num1;
    }
    else {
        return num2;
    }
}

const max1 = getMax(96, 79);
const max2 = getMax(56, 98);
console.log('Max of two is: ', max1);
console.log('Max of two is: ', max2);