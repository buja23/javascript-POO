const Funcionario = require("./Funcionario")
class Enfermeiro extends Funcionario{
    #cip
    #chefe = false
    constructor(matricula, nome, cpf, email, telefone, dataContratacao, salario, cip, chefe){
        super(matricula, nome, cpf, email, telefone, dataContratacao, salario)
        this.#cip = cip
        this.#chefe = chefe
    }

    imprimir(){
        super.imprimir()
        console.log(`CIP: ${this.#cip}`)
        console.log(`Chefe: ${this.#chefe ? "Sim" : "Não"}`)
    }
    
}

module.exports = Enfermeiro