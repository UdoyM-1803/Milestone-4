const nubmers = [300, 100, 450, 700, 200];

const products = [
    {name: 'shampoo', price: 300},
    {name: 'comb', price: 100},
    {name: 'shirt', price: 450},
    {name: 'pant', price: 700},
    {name: 'hat', price: 200}
]

function getShoppingTotal (products) {
    let sum = 0;
    for (const product of products) {
        sum = sum + product.price;
    }
    return sum;
}

const total = getShoppingTotal(products);
console.log('Total cost:', total);