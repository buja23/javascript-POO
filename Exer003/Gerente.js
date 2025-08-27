const Funcionario = require("./Funcionario")

class Gerente extends Funcionario {
    #setor
    #vendas
    constructor(nome, cpf, salario, anosTrabalho, setor, vendas) {
        super(nome, cpf, salario, anosTrabalho)
        this.#setor = setor
        this.#vendas = vendas
    }
    set setor(setor) {
        this.#setor = setor
    }
    get setor() {
        return this.#setor
    }
    set vendas(vendas) {
        this.#vendas = vendas
    }
    get vendas() {
        return this.#vendas
    }
    set salario(salario) {
        this._salario = salario
    }
    get salario() {
        return super.calcularBonus()
    }

    calcularBonus(bonus){
        const bonusGerente = (bonus * this._salario / 100) + 250.00
        this._salario += bonusGerente; 
        return bonusGerente
    }

    imprimir() {
        super.imprimir()
        console.log(`Setor: ${this.#setor}`)
        console.log(`Vendas: ${this.#vendas}`)
    }
}

module.exports = Gerente