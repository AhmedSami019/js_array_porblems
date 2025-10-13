const numbers = [33, 53, 66, 63, 12, 6, 52]
let sumOfAllNum = 0

const sumAl = numbers.map(num =>{
    sumOfAllNum = num + sumOfAllNum
})
console.log(sumOfAllNum);
