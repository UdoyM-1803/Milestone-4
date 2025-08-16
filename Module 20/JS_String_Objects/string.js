const country = 'Bangladesh';
const division = "Dhaka";
const district = `B-Baria`;
const Thana = new String('Demra');


// console.log(typeof country); // string
// console.log(typeof division); // string
// console.log(typeof district); // string
// console.log(typeof Thana); // object


// Array is Mutable in JavaScript..................
const numbers = [1, 2, 3, 4, 5];
console.log(numbers);
// console.log(numbers.length); // 5
// console.log(numbers[0]); // 1
numbers[1] = 11;
console.log(numbers);



// String is Immutable in JavaScript..................
const capital = 'Dhaka';
// console.log(capital.length); // 5
// console.log(capital[2]);

console.log(capital);
capital[3] = 'p';
console.log(capital);
