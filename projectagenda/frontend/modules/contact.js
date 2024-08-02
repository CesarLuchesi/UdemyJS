import validator from  'validator'

export default class Contact {
    constructor(formsClass){
        this.form = document.querySelector(formsClass)
    }
    init(){
        this.events()
    }

    events(){
        if(!this.form) return
        this.form.addEventListener('submit', e => {
            e.preventDefault()
            this.validate(e)
        })
      
    }
    validate(e){
        const el = e.target
        const nameInput = el.querySelector('input[name="nome"]')
        const sobrenomeInput = el.querySelector('input[name="sobrenome"]')
        const emailInput = el.querySelector('input[name="email"]')
        const phoneInput = el.querySelector('input[name="telefone"]')

        let error = false

        if(!nameInput.value.length){
            alert('Necessario cadastrar o nome')
            error = true
        } 

        if(emailInput.value && !validator.isEmail(emailInput.value)){
            alert('Email Invalido')
            error = true
        }

        if(phoneInput.value && phoneInput.value.length < 9){
            alert('O telefone precisa ter no minimo 9 caracteres')
            error = true
        }

        if(!phoneInput.valu && !emailInput.value){
            alert('Necessario cadastrar e-mail ou telefone')
            error = true
        }

        if(!error) el.submit()
    }
}