require('dotenv').config()

const express = require('express')
const app = express()
const port = 3000

const mongoose = require('mongoose')
mongoose.connect(process.env.CONNECTIONSTRING)
 .then(() =>{
   app.emit('Conectado')
 })
 .catch(e => console.log(e))

  const session = require('express-session')
  const MongoStore = require('connect-mongo')
  const flash = require('connect-flash')
  const routes = require('./routes')
  const path = require('path')
  const helmet = require('helmet')
  const { middlewareGlobal, checkCsrfError,csrfMiddleware } = require('./src/middlewares/middleware')
  const csrf = require('csurf')

app.use(helmet())
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(express.static(path.resolve(__dirname, 'public')))

const sessionOptions = session({
  secret: 'fafwfawfa51233',
  store:  MongoStore.create({ mongoUrl: process.env.CONNECTIONSTRING }),
  resave: false,
  saveUninitialized: false,
  cookie:{
    maxAge: 1000 * 60 * 60 * 24 * 7,
    httpOnly: true
  }
})
app.use(sessionOptions)
app.use(flash())

app.set('views',path.resolve( __dirname, 'src', 'views'))
app.set('view engine', 'ejs')

app.use(csrf())
app.use(middlewareGlobal)
app.use(checkCsrfError)
app.use(csrfMiddleware)
app.use(routes)

app.on('Conectado', () =>{
    app.listen(port, () => {
        console.log(`Listening on port ${port}`)
    })
})