const employees = [
    { name: "shahin", experience: 5, starting: 20000, increment: 5000 },
    { name: "shihab", experience: 3, starting: 15000, increment: 7000 },
    { name: "shikot", experience: 9, starting: 30000, increment: 1000 },
    { name: "shohel", experience: 0, starting: 29000, increment: 4000 },
];

function totalProvidedSalary (details) {
    let sum = 0;
    for (const salary of employees) {
        const thisPersonSalary = salary.starting + (salary.experience * salary.increment);
        sum = sum + thisPersonSalary;
    }
    return sum;
}

const totalSalary = totalProvidedSalary(employees);
console.log(totalSalary);