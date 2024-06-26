function creatCalc(){
  return{
    display: document.querySelector('.display'),
    btnClear: document.querySelector('.btn-clear'),


    init(){
      this.buttonClick()
      this.keypressEnter()
    },

    keypressEnter(){
      this.display.addEventListener('keyup', e =>{
        if(e.keyCode === 13){
          this.doMath()
        }
      })
    },

    doMath(){
      let calculation = this.display.value

      try {
        calculation = eval(calculation)

        if(!calculation){
          alert('Conta invalida')
          return
        }

        this.display.value = String(calculation)
      } catch (e) {
        alert('Conta inválida')
        return
      }
    },

    clearDisplay(){
      this.display.value = ''
    },
    
    deletOne(){
      this.display.value = this.display.value.slice(0, -1)
    },


    buttonClick(){
      document.addEventListener('click', e => {
        const el = e.target

        if(el.classList.contains('btn-num')){
          this.btnforDisplay(el.innerText)
        }

        if(el.classList.contains('btn-clear')){
          this.clearDisplay()
        }

        if(el.classList.contains('btn-del')){
          this.deletOne()
        }

        if(el.classList.contains('btn-eq')){
          this.doMath()
        }
      })
    },

    btnforDisplay(value){
      this.display.value += value
    }
  }
}

const calculator = creatCalc()
calculator.init()