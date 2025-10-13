const numbers = [43, 56, 53, 653, 32, 63, 80]
let evenCount = 0

numbers.map(num => {
    if(num % 2 === 0){
        evenCount ++;
    }
})
console.log(evenCount);
