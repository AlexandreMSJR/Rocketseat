let temperature = 37.2
let highTemperature = temperature >= 37.5
let mediumTemperature = temperature < 37.5 && temperature >= 37

if (highTemperature) {
    console.log("febre alta")
} else if (mediumTemperature) {
    console.log("febre moderada")
} else {
    console.log("Saudável")
}