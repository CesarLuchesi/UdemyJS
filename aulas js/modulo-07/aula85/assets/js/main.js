class ValidaFormulario {
    constructor() {
        this.formulario = document.querySelector('.formulario')
        this.eventos()
    }

    eventos(){
        this.formulario.addEventListener('submit', e => {
            this.handleSubmit(e)
        })
    }

    handleSubmit(e){
        e.preventDefault()
        const isValid = this.isValid()
        const senhasValidas = this.senhasSaoValidas()

        if(isValid && senhasValidas){
            alert('Formulário enviado')
            this.formulario.submit()
        }
    }

    senhasSaoValidas(){
        let valid = true

        const senha = this.formulario.querySelector('.senha')
        const repetirSenha = this.formulario.querySelector('.repetir-senha')

        if(senha.value !== repetirSenha.value){
            valid = false
            this.creatError(senha, 'Campos senha e repetir senha precisam ser iguais') 
            this.creatError(repetirSenha, 'Campos senha e repetir senha precisam ser iguais') 
        }

        if(senha.value.lenght < 6 || senha.value.lenght > 12){
            valid = false
            this.creatError(senha, 'Senha precisa ter entre 6 e 12 caracteres')
        }


        return valid
    }

    isValid(){
        let valid = true

        for(let errortext of this.formulario.querySelectorAll('.error-text')){
            errortext.remove()
        } 

        for(let campo of this.formulario.querySelectorAll('.validar')){
           const label = campo.previousElementSibling.innerText
            if(!campo.value){
                this.creatError(campo, `Campo ${label} não pode estar em branco`)
                valid = false
            }

            if(campo.classList.contains('cpf')){
                if(!this.validaCPF(campo)) valid = false
            }

            if(campo.classList.contains('usuario')){
                if(!this.validaUsuario(campo)) valid = false
            }
        }

        return valid
    }

    validaUsuario(campo){
        const usuario = campo.value
        let valid = true
        if(usuario.length < 3 || usuario.length > 12 ){
            this.creatError(campo, "Usuário precisar ter entre 3 e 12 caracteres")
            valid = false
        }

        if(!usuario.match(/^[a-zA-Z0-9]+$/g)){
            this.creatError(campo, "Nome de usuário precisa conter apenas letras e/ou números")
            valid = false
        }
        return valid
    }

    validaCPF(campo){
        const cpf = new ValidaCPF(campo.value)

        if(!cpf.valida()){
            this.creatError(campo, "CPF inválido")
            return false
        }
        return true
    }

    creatError(campo,msg){
        const div = document.createElement('div')
        div.innerHTML = msg
        div.classList.add('error-text')
        campo.insertAdjacentElement('afterend', div)
    }
}

const valida = new ValidaFormulario()