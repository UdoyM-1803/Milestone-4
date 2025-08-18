const products = [
    {name: 'shampoo', price: 300, quantity: 5},
    {name: 'comb', price: 100, quantity: 4},
    {name: 'shirt', price: 450, quantity: 2},
    {name: 'pant', price: 700, quantity: 3},
    {name: 'hat', price: 200, quantity: 1}
]

function cartTotal (products) {
    let total = 0;
    for (const product of products) {
        const thisProductCost = product.price * product.quantity;
        total = total + thisProductCost;
    }
    return total;
}

const shoppingCost = cartTotal(products);
console.log(shoppingCost);