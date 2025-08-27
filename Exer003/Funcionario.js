class Funcionario{
    _nome
    _cpf
    _salario
    _anosTrabalho
    constructor(nome, cpf, salario, anosTrabalho){
        this._nome = nome
        this._cpf = cpf
        this._salario = salario
        this._anosTrabalho = anosTrabalho
    }

    set nome(nome){
        this._nome = nome
    }
    get nome(){
        return this._nome
    }
    set cpf(cpf){
        this._cpf = cpf
    }
    get cpf(){
        return this._cpf
    }
    set salario(salario){
        this._salario = salario
    }
    get salario(){
        return this._salario
    }
    set anosTrabalho(anosTrabalho){
        this._anosTrabalho = anosTrabalho
    }
    get anosTrabalho(){
        return this._anosTrabalho
    }
    calcularBonus(){
        const bonus = 0.02 * this._salario
        this._salario += bonus; 
        return bonus
    }

    imprimir(){
        console.log(`Nome: ${this._nome}`)
        console.log(`CPF: ${this._cpf}`)
        console.log(`Salário: ${this._salario}`)
        console.log(`Anos de Trabalho: ${this._anosTrabalho}`)
    }

}

module.exports = Funcionario