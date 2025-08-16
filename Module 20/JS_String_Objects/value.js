const person = {
    name: 'Sadar Uddin',
    age: 25,
    profession: 'developer',
    salary: 25000,
    married: true,
    'fav places': ['Bandorban', 'SaintMartin', 'Kuakata']
}

person.salary = 30000; // Update salary
person['age'] = 26;
person['fav places'] = ['Maldives', 'Bali', 'Pataya']


const propName = 'profession';
person[propName] = 'DevOps';

console.log(person);