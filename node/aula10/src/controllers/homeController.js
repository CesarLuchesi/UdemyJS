exports.homePage = (req, res) => {
    res.send(
     res.render('index')
     )
}

exports.formPost = (req, res) => {
    res.send('POST')
}