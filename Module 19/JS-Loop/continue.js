// continue --> skip this one
// break --> exit the loop

// for (let i=1; i<10; i++) {
//     if (i === 6) {
//         continue;
//     }
//     console.log(i);
// }


let  n = 0;
while (n < 50) {
    n++;
    if (n%5 !== 0) {
        continue;
    }
    console.log(n);
}