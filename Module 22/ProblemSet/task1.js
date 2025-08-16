function convert (celsius) {
    const fahrenheit = (celsius * (9/5))+32;
    return fahrenheit;
}

const result = convert(36.8);
console.log(result.toFixed(2) + ' Fahrenheit');