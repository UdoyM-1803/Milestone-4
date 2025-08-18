const electronics = [
    {name: 'laptop', price: 35000},
    {name: 'tablet', price: 15000},
    {name: 'mobile', price: 20000},
]

function calculateElectronicsBudget(num1, num2, num3) {
    const totalLaptopPrice = num1 * 35000;
    const totalTabletPrice = num2 * 15000;
    const totalMobilePrice = num3 * 20000;
    const total = totalLaptopPrice + totalMobilePrice + totalTabletPrice;
    return total;
}

const requiredMoney = calculateElectronicsBudget(4, 6, 3);
console.log(requiredMoney);