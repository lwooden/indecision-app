



class Person {
    constructor(name = 'Anonymous', age = 0) {
        this.name = name
        this.age = age
    }

    getGreeting() {
        return `Hello my name is ${this.name}!`
    }

    getDescription() {
        return `Hello my name is ${this.name} and I am ${this.age} years old!`
    }
}

class Student extends Person {
    constructor(name, age, major) {
      super(name, age) // call superclass constructor for name and age property
      this.major = major
    }

    hasMajor() {
        return this.major
    }

    getDescription() {
        let description = super.getDescription() // call superclass getDescription method

        if(this.hasMajor()) {
            description = description + ` My major is ${this.major}!`
        }

        return description
    }
}

class Traveler extends Person {
    constructor(name, age, location) {
        super(name, age)
        this.location = location
    }

    getGreeting() {
        let greeting = super.getGreeting()

        if(this.location) {
            greeting = greeting + ` Im visiting from ${this.location}!`
        }
        return greeting
    }
}

const low = new Person("Low", 29)
console.log(low.getGreeting())
console.log(low.getDescription())

const other = new Person()
console.log(other.getGreeting())
console.log(other.getDescription())

const lowellWooden = new Student('Lowell Wooden', 29, 'Computer Technology')
console.log(lowellWooden.getDescription())

const home = new Traveler('Lowell',29, 'Maryland')
console.log(home.getGreeting())