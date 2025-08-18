const jim = 56;
const tim = 839;
const kim = 68;

if (jim > tim &&  jim > kim) {
    console.log('Jim is the ultimate boss');
}
else if (tim > jim && tim > kim){
    console.log('Tim is the boss');
}
else {
    console.log('Kim is the kardashian boss');
}

function maxOfThree (num1, num2, num3) {
    if (num1 > num2 && num1 > num3) {
        return num1;
    }
    else if (num2 > num1 && num2 > num3) {
        return num2;
    }
    else {
        return num3;
    }
}

const max = maxOfThree(45,35,67);
console.log('The maximum number is: ', max);


const max2 = Math.max(12,1,56,23)
console.log('Max is isuing Math.max ', max2);