/*  Sistema de gastos familiar

    Crie um objeto que possuirá 2 propriedades, ambas do tipo array:

        * Receitas: []
        * Despesas: []
    
    Agora, crie uma função que irá calcular o total de receitas
    e despesas e irá mostrar uma mensagem se a família
    está com saldo positivo ou negativo, seguido do valor do saldo

*/

let family = {
    incomes: [400, 200, 600],
    expenses: [200, 600, 1000]
}

function sum(array) {
    let total = 0

    for (let value of array) {
        total += value 
    }

    return total
}

function calculateBalance() {
    const calculateIncomes = sum(family.incomes);
    const calculateExpenses = sum(family.expenses)
    const result = calculateIncomes - calculateExpenses

    if (result >= 0) {
        return `Saldo positivo de: R$${result}`
    } else {
        return `Saldo negativo de de: R$${result.toFixed(2)}`
    }
}

console.log(calculateBalance())