const numbers = [2, 3, 5, 7, 11, 23, 37];
const doubleNumbers = [];

for (const number of numbers) {
    const doubled = number * 2;
    doubleNumbers.push(doubled);
}

//console.log(doubleNumbers);

function getTripleNumbers(numbers) {
    const tripleNumbers = [];
    for (const number of numbers) {
        const tripled = number * 3;
        tripleNumbers.push(tripled);
    }
    return tripleNumbers;
}

const result = getTripleNumbers(numbers);
//console.log(result);

// Using map: 

const squareNumbers = num => num * num;
const makeSquareNumbers = numbers.map(squareNumbers);

//const resultMap = squareNumbers(numbers);
console.log(makeSquareNumbers);