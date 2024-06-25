const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send(
       ` <form action="/" method="POST">
            Nome: <input type="text" name="nome"/>
            <button>Enviar</button>
        </form>`
    )
})

app.post('/', (req,res)=> {
    res.send('I received form')
})

app.get('/contato', (req,res) => {
    res.send('Thank you for contacting us')
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})