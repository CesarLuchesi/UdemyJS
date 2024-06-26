const express = require('express')
const app = express()
const port = 3000

app.use(express.urlencoded({extended: true}))

app.get('/', (req, res) => {
    res.send(
       ` <form action="/" method="POST">
            Name: <input type="text" name="name"/>
            <button>Enviar</button>
        </form>`
    )
})

app.get('/testes/:userId?', (req, res) => {
    console.log(req.params.userId)
    console.log(req.query)
    res.send(req.params)
})

app.post('/', (req,res)=> {
    console.log(req.body)
    res.send(`What you sent: ${req.body.name} `)
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})