function multiply (num1, num2) {
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        return "Please, provide a number";
    }
    const mult = num1 * num2;
    return mult;
}

const result = multiply(5, 7);
// console.log(result);


function fullName(first, second) {
    if (typeof first !== 'string') {
        return "First name should be a string"
    }
    else if (typeof first !== 'string') {
        return "Second name should be a string";
    }
    const full = first + ' ' + second;
    return full;
}

const name = fullName('Rahat', 'Pathan');
// console.log(name);


function getPrice(product) {
    if (typeof product !== 'object') {
        return 'Please, provide an object.';
    }
    const price = product.price;
    return price;
}

const price = getPrice({name: 'shoe-self', price: 460, color: 'green'});
// console.log(price);


function getSecond(numbers) {
    if (Array.isArray(numbers) === false) {
        return "Please, provide an array";
    }
    const second = numbers[1];
    return second;
}

const second = getSecond([1,34,346,34]);
console.log(second);