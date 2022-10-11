/* Transformar notas escolares

    Crie um algoritmo que ransforme as notas do sistemas
    númerico para sistemas de notas em caracteres Tipo A B C

    * de 90 para cima - A
    * entre 80 - 89 - B
    * entre 70 - 79 - C
    * entre 60 - 69 - D
    * menor que 60 - F

*/

function schoolNote(note) {

    let noteA = note >= 90 && note <= 100
    let noteB = note <= 89 && note >= 80
    let noteC = note <= 79 && note >= 70
    let noteD = note <= 69 && note >= 60
    let noteF = note < 60 && note >= 0

    if (noteA) {
        return console.log("Nota A")
    } else if (noteB) {
        return console.log("Nota B")
    } else if (noteC) {
        return console.log("Nota C")
    } else if (noteD) {
        return console.log("Nota D")
    } else if (noteF) {
        return console.log("Nota F")
    } else {
        return console.log("Valor informado inválido!")
    }
}

schoolNote(101)
schoolNote(-1)
schoolNote(0)
schoolNote(50)
schoolNote(60)
schoolNote(61)
schoolNote(70)
schoolNote(80)
schoolNote(90)
schoolNote(100)

