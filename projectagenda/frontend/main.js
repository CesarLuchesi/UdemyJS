import 'core-js/stable'
import 'regenerator-runtime/runtime'

import Login from './modules/login'
import Contact from './modules/contact'

// import './assets/css/style.css';

const register = new Login('.form-register')
const login = new Login('.form-login')
const edit = new Contact('.form-edit')
const contact = new Contact('.form-contact')
login.init()
register.init()
edit.init()
contact.init()

