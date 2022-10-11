const { EventEmitter } = require("events")
const ev = new EventEmitter()

/* on escuta sempre

    ev.on("saySomething", (message) => {
     console.log("Eu ouvi você: ", message)
    }) 
*/ 

// once escuta apenas 1 vez

ev.once("saySomething", (message) => {
    console.log("Eu ouvi você: ", message)
})

ev.emit("saySomething", "Alexandre")
ev.emit("saySomething", "Pedro")