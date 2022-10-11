const express = require('express')
const app = express()

app.set('view engine', 'ejs')

app.get('/', function (req, res) {
    const items = [
        {
            title: "D",
            message: 'esenvolvedor'
        },
        {
            title: "E",
            message: 'JS usa JavaScript para renderizar HTML'
        },
        {
            title: "M",
            message: 'uio fácil de usar'
        },
        {
            title: "A",
            message: "morzinho"
        },
        {
            title: "I",
            message: "nstall ejs"
        },
        {
            title: "S",
            message: "intaxe simples"
        }

    ]

    res.render('pages/index', {
        qualitys: items,
        subtitle
    })
})

const subtitle = "Uma linguagem de modelagem para criação de páginas HTML utilizando JavaScript"

app.get('/sobre', function (req, res) {
    res.render('pages/about')
})

app.listen(8080)
console.log('rodando')