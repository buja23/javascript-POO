const Funcionario = require("./Funcionario")
class Medico extends Funcionario{
    #crm
    #especialidade
    constructor(matricula, nome, cpf, email, telefone, dataContratacao, salario, crm, especialidade){
        super(matricula, nome, cpf, email, telefone, dataContratacao, salario)
        this.#crm = crm
        this.#especialidade = especialidade
    }
    set crm(crm){
        this.#crm = crm
    }
    get crm(){
        return this.#crm
    }
    set especialidade(especialidade){
        this.#especialidade = especialidade
    }
    get especialidade(){
        return this.#especialidade
    }

    imprimir(){
        super.imprimir()
        console.log(`CRM: ${this.#crm}`)
        console.log(`Especialidade: ${this.#especialidade}`)
    }
}

module.exports = Medico