let weight = 60;    //as a kg unit
let height = 1.61;   //as a meter unit

const BMI = weight/(height*height);
console.log(BMI.toFixed(2));

if (BMI < 18.5) {
    console.log('You are underweight.')
}
else if (BMI >= 18.5 && BMI <=24.9) {
    console.log('You are Normal.');
}
else if (BMI >= 25 && 25 <=29.9) {
    console.log('You are Overweight.');
}
else {
    console.log('You are Obese.');
}