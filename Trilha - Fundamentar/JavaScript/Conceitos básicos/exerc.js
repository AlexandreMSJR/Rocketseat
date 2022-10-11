// 1
let weight

// 2
console.log(typeof weight)

// 3
let name = "Alexandre"
let age = 23
let stars = 4.8
let isSubscribed = true

// 4

let student = {}
console.log(typeof student)

student = {
    name: "Alexandre",
    age: 24,
    weight: 83
}

console.log(`O ${student.name} tem ${student.age} anos e pesa ${student.weight} Kg.`)

// 5 
let students = []

// 6
students = [
    student
]

console.log(students)

// 7
console.log(students[0])

// 8
let student2 = {
    name: "Pedro",
    age: 54,
    weight: 67.2,
    isSubscribed: true
}

students = [
    student,
    student2
]

console.log(students[1])

/* 10  Sem rodar o código diga qual será a resposta ?
    console.log(a)
    var a = 1

    Undefined, já que o var está definido depois da sua chamada.
*/
