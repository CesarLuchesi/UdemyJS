class DispositivoEletronico {
    constructor(nome,ligado){  
        this.nome = nome
        this.ligado = false
    }

    ligar() {
        if(this.ligado){
            console.log(this.nome + ' já ligado')
            return
        }
        this.ligado = true
    }

    desligar() {
        if(!this.ligado){
            console.log(this.nome + ' desligado')
            return
        }
        this.ligado = false
    }
}

class Smartphone extends DispositivoEletronico {
    constructor(nome,cor,modelo){
        super(nome )
        this.cor = cor
        this.modelo = modelo
    }
}

const s1 = new Smartphone('Samsung', 'preto', 'galaxy s10')
console.log(s1)