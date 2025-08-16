const colors = ['red', 'blue', 'green', 'yellow', 'orange'];

console.log(colors);
const rev_color = [];
for (const color of colors) {
    rev_color.unshift(color);
}
console.log(rev_color);


const rev_color2 = [];
for (let i=colors.length-1; i>=0; i--) {
    rev_color2.push(colors[i]);
}
console.log(rev_color2);
