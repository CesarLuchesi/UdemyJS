exports.homePage = (req, res) => {
    res.send(
        ` <form action="/" method="POST">
             Name: <input type="text" name="name"/>
             <button>Enviar</button>
         </form>`
     )
}

exports.formPost = (req, res) => {
    res.send('POST')
}