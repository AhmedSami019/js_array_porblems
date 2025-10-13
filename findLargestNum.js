const numbers = [32, 21, 54, 32, 63, 74, 59]
let largestNum = numbers[0]

numbers.map(num => {
    // console.log(num);
    if(num > largestNum){
        largestNum = num
    }
})
console.log(largestNum, "is the largest number");