const numbers = [33, 2, 53, 5, 63, 3, 10, 23]

// numbers.map(num => {
//     if(num > 10){
//         console.log(num);
//     }
// })

const numberGraterThen10 = numbers.filter(num =>{
    if (num > 10) {
        return num
    }
})
console.log(numberGraterThen10);

// findNumGraterThen10.js