/*
let myArray = new Array(10)
console.log(myArray)

// Elementos do Array

console.log(["a",
    { type: "array" },
    function () { return "alo" }].length)

// Manipulando Array

let word = "Manipulação"

console.log(Array.from(word))

 Adicionar um item no fim*/

let techs = ["html", "css", "js"]
techs.push("nodeJs")
console.log(techs)

// adicionar no comeco

techs.unshift("sql")
console.log(techs)

// remover do fim

techs.pop()
console.log(techs)

// remover no início

techs.shift()
console.log(techs)

// pegar somente alguns elementos do array
console.log(techs.slice(1, 3))

// remover 1 ou mais items em qualquer posição do array
techs.splice(1, 1)
console.log(techs, "techs object")

// encontrar a posição de um elemento do array
let index = techs.indexOf('html')
console.log(index)
techs.splice(index, 1)
console.log(techs)