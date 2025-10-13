const data = ["sami", "miraz", 904, true, {name: "emtiaz",}]



const newData = data.filter(element => {
    if(typeof element === "string"){
        // console.log('this is a string');
        return element
    }
})

console.log(newData);