const numbers = [22, 53, 63, 12, 63, 64]


const findIndexOfElement = (item)=>{
    const index = numbers.indexOf(item)
    if(index !== -1){
        console.log(`the index of ${item} is ${index}`);
    }else{
        console.log("there is no element like this");
    }
}

findIndexOfElement(12)