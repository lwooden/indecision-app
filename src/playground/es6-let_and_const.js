// var declarations allow us to overwrite the previous value assigned to the same variable 
// without the program throwing an error (telling us that our variable was already defined)

var nameVar = "Low"
var nameVar = "Mike"
console.log("nameVar: ", nameVar)

// We cannot redefine these variables using let and const

// let nameLet = "E";
// let nameLet = "Low Jr";
// console.log("nameLet: ", nameLet)


const nameConst = "Jamal"
// nameConst = "Ty"
console.log("nameConst: ", nameConst)

function getPetName() {
    var petName = "Achilles"
    return petName
}

const petName = getPetName()
console.log(petName)

// Block Scoping

// let and const are block scoped (includes functions and if statements)
// we can access var variables outside of the block scope


// const - always 
// let - if you need to 
// var - NEVER!

var fullName = 'Lowell Wooden'

if (fullName) {
    const firstName = fullName.split(' ')[0]
    console.log(firstName)
}

console.log(firstName)