const salary = 25000;
const isBCS = true;
const height = 68;
const hasCar = false;


// if (salary > 20000 && height > 66) {
//     console.log('Su-------patro');
// }

// else {
//     console.log('Onno patro khuji');
// }

// if (salary > 25000 || height > 72) {
//     console.log('Accepted');
// }
// else {
//     console.log('Rejected');
// }



// more and more conditions
// if (salary > 25000 || height > 72 || isBCS == true) {
//     console.log('Accepted');
// }
// else {
//     console.log('Rejected');
// }


// if (salary > 25000 && height > 72 && isBCS == true) {
//     console.log('Accepted');
// }
// else {
//     console.log('Rejected');
// }



// ------------------Complex Condition---------------
if ((salary > 25000 && hasCar == true) || isBCS == true) {
    console.log('All agreed');
}

if ((salary > 25000 || hasCar == true) && isBCS == true) {
    console.log('All agreed');
}