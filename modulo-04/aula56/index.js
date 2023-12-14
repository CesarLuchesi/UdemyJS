//factory funciotn
//constuctor function
function creatPeople(nome,sobrenome, altura, peso){
    return{
        nome,
        sobrenome,

        get fullName(){
            return `${this.nome} ${this.sobrenome} `
        },

        //Setter
        set fullName(value){
            value = value.split(' ')
            this.nome = value.shift()
            this.sobrenome = value.join(' ')
            console.log(value)
        },

        talk(assunto){
            return `${this.nome} is ${assunto}`
        },

        altura: altura,
        peso: peso,
        //getter
         get imc() {
            const indice = this.peso / (this.altura ** 2)
            return indice.toFixed(2)
        }
    }
}

const p1 = creatPeople('Cesar', 'Luchesi', 1.8, 80)
p1.fullName = 'César Fernandes Luchesi'
console.log(p1.talk('talking aboult js'))
console.log(p1.nome)
console.log(p1.sobrenome)
