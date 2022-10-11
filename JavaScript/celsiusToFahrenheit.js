/* Celsius em fahrenheit 
    
    Crie uma função que receba uma string em celsius ou
    fahrenheit e faça a transformação de uma unidade para outra

    C = (F - 32) * 5/9

    F = C * 9/5 + 32
*/
// my solution
let num = "16"
let convert = parseInt(num)

function celsius (num) {

    const calcF = (num * 9/5 + 32).toFixed(2)

    return console.log(`O valor em celsius é ${num}ºC e convertido para fahrenheit é ${calcF}F`)
}

function fahrenheit (num) {

    const calcC = ((num - 32) * 5/9).toFixed(2)

    return console.log(`O valor em fahrenheit é ${num}F e convertido para celsius é ${calcC}ºC`)
}

celsius(num)
fahrenheit(num)