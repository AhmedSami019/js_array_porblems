const numbers = [43, 56, 53, 653, 32, 63, 80]
let oddCount = 0

numbers.map(num => {
    if(num % 2 !== 0){
        oddCount ++;
    }
})
console.log(oddCount);
