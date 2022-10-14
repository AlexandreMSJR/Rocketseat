const people = ['Rafa', 'Diego', 'Dani', 'Rod']
const upperCasePeoplehatStartsWithD = people
.filter(person => person.startsWith('D'))
.map(dperson => dperson.toUpperCase())

console.log(upperCasePeoplehatStartsWithD)