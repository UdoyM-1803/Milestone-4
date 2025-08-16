/**
 * year will be a leap year if the year is divisible by 4
*/

function isLeapYear (year) {
    if (year % 4 == 0) {
        return true;
    }
    else {
        return false;
    }
}

const leap = isLeapYear(1953);
console.log(leap);

/**
 * 1. Those year that is not divisible by 100 and if the year is divisible by 4 then it will be a leap year.
 * 2. If the year is divisible by 400, then it is a leap year.
 * 3. Otherwise it is not leap year.
*/

function isLeapYear2(year) {
    if (year % 100 !== 0 && year % 4 === 0) {
        return true;
    }
    else if (year % 100 === 0 && year % 400 === 0) {
        return true;
    }
    else {
        return false;
    }
}

const leap2 = isLeapYear2(2100);
const leap3 = isLeapYear2(2400);
const leap4 = isLeapYear2(1990);
const leap5 = isLeapYear2(2056);

console.log(leap2, leap3, leap4, leap5);