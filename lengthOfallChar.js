// count total length of all char in a array
const name = ["sami", "miraz", "anik", "rifat"]
let allChar = "";

name.map(word => {
    allChar += word
})
console.log(allChar.length);
