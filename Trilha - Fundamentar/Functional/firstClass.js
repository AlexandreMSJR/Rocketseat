const sayMyName = () => console.log('Alexandre')
const runFunction = fn => fn()

runFunction(sayMyName)
runFunction(() => console.log('Discover'))

console.log(runFunction(Math.random))