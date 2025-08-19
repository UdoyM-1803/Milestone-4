function calculateTax(income, expenses) {
    if (income < 0 || expenses < 0 || income < expenses) {
        return "Invalid Input";
    }
    const tax = (income - expenses) * 0.2;
    return tax;
}

const result1 = calculateTax(10000,3000);
console.log(result1);
const result2 = calculateTax(34000,1753);
console.log(result2);
const result3 = calculateTax(5000,1500);
console.log(result3);
const result4 = calculateTax(7000,7000);
console.log(result4);
const result5 = calculateTax(-5000,2000);
console.log(result5);
const result6 = calculateTax(6000,-1500);
console.log(result6);

