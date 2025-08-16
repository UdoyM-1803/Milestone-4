/**
 * for a given string tell me whether it has even number of characters or not.
 * 
 * */ 

function evenSizedString(str) {
    const size = str.length;
    console.log(str, size);
    if (size % 2 == 0) {
        console.log('Even Size');
        return true;
    }
    else {
        console.log('Odd Size');
        return false;
    }
}

// evenSizedString('Dhaka');
// evenSizedString('Faka');


function doubleOrTriple (number, doDouble) {
    if (doDouble) {
        const result = number * 2;
        return result;
    }
    else {
        const result = number * 3;
        return result;
    }
}

// console.log(doubleOrTriple(5, true))
// console.log(doubleOrTriple(5, false))

function numberOfElements (numbers) {
    const len = numbers.length;
    return len;
}

// console.log(numberOfElements([12, 45, 643, 46, 54, 85, 1,56]));

function getAge(person) {
    const age = person.age;
    return age;
}