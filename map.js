const numbers = [2, 3, 5, 7, 11, 23, 37];
const doubleNumbers = [];

for (const number of numbers) {
    const doubled = number * 2;
    doubleNumbers.push(doubled);
}

console.log(doubleNumbers);