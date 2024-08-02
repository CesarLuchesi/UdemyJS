const mongoose = require('mongoose')
const validator = require('validator')

const contatoSchema = new mongoose.Schema({
    nome: {type: String, required: true},
    sobrenome: {type: String, required: false, default: ''},
    email: {type: String, required: false, default: ''},
    telefone: {type: String, required: false, default: ''},
    criadoEm: {type: Date, default: Date.now},
})


const contatoModel = mongoose.model('contato', contatoSchema)

function Contato(body){
    this.body = body
    this.errors = []
    this.contato = null
}

Contato.prototype.register = async function () {
    this.valide()
    if(this.errors.length > 0) return
    this.contato = await contatoModel.create(this.body)
}

Contato.prototype.valide = function() {
    this.cleanUp()
    if(this.body.email && !validator.isEmail(this.body.email)) this.errors.push('E-mail inválido')
    if(!this.body.nome) this.errors.push('Nome é um campo obrigatório')   
    if(!this.body.email && !this.body.telefone) {
        this.errors.push('Um dos campos (e-mail ou telefone), precisa ser enviado')   
    }
}

Contato.prototype.cleanUp = function() {
    for(const key in this.body) {
      if(typeof this.body[key] !== 'string'){
        this.body[key] = ''
      }
    }

    this.body = {
        nome: this.body.nome,
        sobrenome: this.body.sobrenome,
        email: this.body.email,
        telefone: this.body.telefone,
    }
}

Contato.prototype.edit = async function(id){
    if(typeof id !== 'string') return
    this.valide()
    if(this.errors.length > 0) return
    this.contato = await contatoModel.findByIdAndUpdate(id, this.body, {new : true})
}

Contato.searchId = async function(id){
    if(typeof id !== 'string') return
    const contato = await contatoModel.findById(id)
    return contato
}

Contato.searchContact = async function(){
    const contatos = await contatoModel.find()
    .sort({ criadoEm: -1})
    return contatos
}

Contato.delete = async function(id){
    if(typeof id !== 'string') return
    const contatos = await contatoModel.findOneAndDelete({_id: id})
    .sort({ criadoEm: -1})
    return contatos
}
module.exports = Contato