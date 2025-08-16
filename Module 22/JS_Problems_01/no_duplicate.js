/**
 * array has some duplicate elements
*/

const biryanikhor = ['abul', 'kabul', 'babul', 'bulbul', 'dabul', 'babul', 'abul', 'anabul'];
const numbers = [5,4,8,3,6,2,6,5,3,9,2,1];


function noDuplicate(array) {
    const unique = [];
    for (const item of array) {
        if (unique.includes(item) === false) {
            unique.push(item);
        }
    }
    return unique;
}


const uniqueArray = noDuplicate(biryanikhor);
console.log(uniqueArray);