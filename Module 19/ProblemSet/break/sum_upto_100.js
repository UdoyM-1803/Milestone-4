let num = 1;
let sum = 0;
while (true) {
    sum = sum + num;   // adding num to sum
    num++;             // incrementing num by 1
    if (sum > 100) {
        break; // exit the loop when sum reaches or exceeds 100
    }
}
console.log(sum);