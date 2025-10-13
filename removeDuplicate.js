const numbers = [1, 2, 2, 3, 4, 6, 5, 3, 4]
const newArray = [];

numbers.map(num => {
    if(!newArray.includes(num)){
        newArray.push(num)
    }
})

console.log(newArray);