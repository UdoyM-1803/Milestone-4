const persons = ['Rakib', 'Jamal', 'Kamal', 'Sakib'];

const sortedPersons = persons.sort();
console.log(sortedPersons);

// Sort -->

// const numbers = [4, 7, 2, 8, 3, 6];

/*
Ascending --> Smaller to Larger
Descending --> Larger to Smaller
*/ 

const numbers = [4, 7, 12, 8, 38, 6, 1];


// const numbers_asc = numbers.sort();
const numbers_asc = [...numbers].sort(function(a,b) {return a-b});
const numbers_dsc = [...numbers].sort(function(a,b) {return b-a});
console.log(numbers_asc);
console.log(numbers_dsc);