const friends = ["rifat", "miraz","sakil", "anik"]
const UpperCaseName = [];


friends.map(friend =>{
    const newName =  friend.toUpperCase()
    UpperCaseName.push(newName)
})
console.log(UpperCaseName);