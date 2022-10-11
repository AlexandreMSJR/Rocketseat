// clearInterval irá cancelar um setInterval registrado
const timeOut = 1000
const clearOut = 3000
const checking = () => console.log("checking!")

let interval = setInterval(checking, timeOut)

setTimeout( () => clearInterval(interval), clearOut)