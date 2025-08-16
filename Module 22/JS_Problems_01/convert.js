// 1 feet = 12 inches


function inchToFeet(inch) {
    const feet = inch / 12;
    return feet;
}

function inchToFeet2 (inch) {
    const feetFraction = inch/12;
    const feetNumber = parseInt(feetFraction);
    const inchRemaining = inch % 12;
    const result = feetNumber + ' ft ' + inchRemaining + ' inch ';
    return result;
}

const shuvoHeight = inchToFeet(75);
// console.log(shuvoHeight);
const shuvoHeight2 = inchToFeet2(75);
// console.log(shuvoHeight2);


function mileToKilo (mile) {
    const kilo = mile * 1.60934;
    return kilo;
}

console.log(mileToKilo(6));

function kiloToMile (kilo) {
    const mile2 = kilo * 0.621371;
    return mile2;
}

console.log(kiloToMile(100));