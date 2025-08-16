const person = {
    name: 'Sadar Uddin',
    age: 25,
    profession: 'developer',
    salary: 25000,
    married: true,
    'fav places': ['Bandorban', 'SaintMartin', 'Kuakata']
}

// console.log(person);

// Dot Notation........
// console.log(person.profession);
const income = person.salary;
// console.log(income);


// Bracket Notation........
console.log(person['age']);
const boyos = person['age'];
console.log(boyos);


// Error
// console.log(person.'fav places')
console.log(person['fav places']);

const keyName = 'Profession';
console.log(person[keyName]);