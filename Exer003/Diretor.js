const Funcionario = require("./Funcionario")

class Diretor extends Funcionario {

    #setores
    constructor(nome, cpf, salario, anosTrabalho, setores){
        super(nome, cpf, salario, anosTrabalho)
        this.#setores = setores
    }

    set setores(setores){
        this.#setores = setores
    }
    get setores(){
        return this.#setores
    }
    set salario(salario){
        this._salario = salario
    }
    get salario(){
        return super.calcularBonus() 
    }
    calcularBonus(){
        const bonusDiretor = 0.5 * this._salario + 500
        this._salario += bonusDiretor; 
        return bonusDiretor
    }

    imprimir(){
        super.imprimir()
        console.log(`Setores: ${this.#setores}`)
    }
}

module.exports = Diretor