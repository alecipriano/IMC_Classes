class Pessoa{
   nome;
   peso;
   altura;

   constructor(nome, peso, altura){
      this.nome = nome;
      this.peso = peso;
      this.altura = altura;
   }

   calcularImc(){
      return this.peso / (this.altura * this.altura)
   }

   classificarImc() {
      const imc = this.calcularImc();
      if (imc < 18.5) return 'Abaixo do Peso';
      else if (imc < 24.9) return 'Peso Normal';
      else if (imc < 29.9) return 'Sobrepeso';
      else if (imc < 34.9) return 'Obesidade grau I';
      else if (imc < 39.9) return 'Obesidade grau II';
      else if (imc < 49.9) return 'Obesidade grau III';
      return 'Obesidade grau IV ou superior';
  }
}

const jose = new Pessoa ("Jose", 70, 1.75);
const ValorImc = jose.calcularImc()
const classImc = jose.classificarImc()

console.log(jose)
console.log(ValorImc.toFixed(1))
console.log(` O ${jose.nome} possui valor de IMC igual a ${ValorImc.toFixed(1)} e sua classificação é ${classImc}.`)