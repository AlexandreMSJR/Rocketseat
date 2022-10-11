/*
    Function() constructor

    * expressão new
    * criar um novo objeto
    * this keyword
    
*/

function Person(name) {
    this.name = name
}
const alexandre = new Person("Alexandre")
const joao = new Person("João")
console.log(alexandre)
console.log(joao)