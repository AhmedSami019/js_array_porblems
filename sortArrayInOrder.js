const numbers = [ 4, 2, 1, 3, 5, 7]

const newArray = [];

numbers.map(num =>{

        // console.log(newArray[newArray.length -1]);
        if(newArray[newArray.length -1] > num){
            // console.log('ki khobor');
            newArray.splice(newArray.length -2, 0 ,num )
        }
    
})
console.log(newArray);