const numbers = [2, 5, 6, 7, 8]
let doubleNumbers = [];

numbers.map(num => {
    const newNum = num * 2
    doubleNumbers.push(newNum)
})
console.log(doubleNumbers);