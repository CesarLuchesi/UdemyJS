//705.484.450-52  070.987.720-03

/*
7   0   5   4   8   4   4   5   0 
x   x   x   x   x   x   x   x   x 
10  9   8   7   6   5   4   3   2
70  0   40  28  48  20 16  15   0 = 237
    resto da divisão por 11
11 - (soma % 11) -> se for maior que 9, consideramos 0

11 - (237 % 11) = 5 (Primeiro digito)

7   0   5   4   8   4   4   5   0   5
x   x   x   x   x   x   x   x   x   x 
11  10  9   8   7   6   5   4   3   2
77  0   45  32  56  25  20  20  0   10 = 284

11 - (284 % 11) = 2 (segundo digito)
*/


const validateCpf = (cpf) => {
    const cleanCpf = cpf.replace(/\D+/g, '');
    const cpfArray = Array.from(cleanCpf).map(Number);
    const firstValidate = [10, 9, 8, 7, 6, 5, 4, 3, 2];
    const secondeValidate = [11, 10, 9, 8, 7, 6, 5, 4, 3, 2]

    function multiplyArrays(arrayPeople, validateArray) {
        let newArray = [];

        for (let i = 0; i < validateArray.length; i++) {
            newArray.push(arrayPeople[i] * validateArray[i]);
        }
        return newArray;
    }

    const result1 = multiplyArrays(cpfArray, firstValidate);
    const initialValue1 = 0;
    const sum1 = result1.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initialValue1,
    );

    const digit1 = 11 - (sum1 % 11)
    

    const result2 = multiplyArrays(cpfArray, secondeValidate);
    const initialValue2 = 0;
    const sum2 = result2.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initialValue2,
    );

    let restSum2 = 11 - (sum2 % 11)

    if (restSum2 > 9){
        return restSum2 = '0'
    }

    console.log(digit1)
    console.log(sum1);
    console.log(restSum2)
    console.log(sum2);
}

validateCpf('070.987.720-03');


function ValidaCPF(cpfEnviado) {
    Object.defineProperty(this, 'cpfLimpo', {
      enumerable: true,
      get: function() {
        return cpfEnviado.replace(/\D+/g, '');
      }
    });
  }
  
  ValidaCPF.prototype.valida = function() {
    if(typeof this.cpfLimpo === 'undefined') return false;
    if(this.cpfLimpo.length !== 11) return false;
    if(this.isSequencia()) return false;
  
    const cpfParcial = this.cpfLimpo.slice(0, -2);
    const digito1 = this.criaDigito(cpfParcial);
    const digito2 = this.criaDigito(cpfParcial + digito1);
  
    const novoCpf = cpfParcial + digito1 + digito2;
    return novoCpf === this.cpfLimpo;
  };
  
  ValidaCPF.prototype.criaDigito = function(cpfParcial) {
    const cpfArray = Array.from(cpfParcial);
  
    let regressivo = cpfArray.length + 1;
    const total = cpfArray.reduce((ac, val) => {
      ac += (regressivo * Number(val));
      regressivo--;
      return ac;
    }, 0);
  
    const digito = 11 - (total % 11);
    return digito > 9 ? '0' : String(digito);
  };
  
  ValidaCPF.prototype.isSequencia = function() {
    const sequencia = this.cpfLimpo[0].repeat(this.cpfLimpo.length);
    return sequencia === this.cpfLimpo;
  };
  
  const cpf = new ValidaCPF('070.987.720-03');
  
  if(cpf.valida()) {
    console.log('Cpf válido');
  } else {
    console.log('Cpf inválido');
  }
  