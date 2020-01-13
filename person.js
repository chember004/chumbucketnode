//Module wrapper function
// (function (exports, require, module, __filename, __dirname){

// })

class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    greeting(){
        console.log(`My name is ${this.name} and i'm ${this.age}`);
    }
};

module.exports = Person;