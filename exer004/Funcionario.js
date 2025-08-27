class Funcionario{
    _matricula
    _nome
    _cpf
    _email
    _telefone
    _dataContratacao
    _salario
    constructor(matricula, nome, cpf, email, telefone, dataContratacao, salario){
        this._matricula = matricula
        this._nome = nome
        this._cpf = cpf
        this._email = email
        this._telefone = telefone
        this._dataContratacao = dataContratacao
        this._salario = salario
    }
    get matricula(){
        return this._matricula
    }
    set matricula(matricula){
        this._matricula = matricula
    }
    get nome(){
        return this._nome
    }
    set nome(nome){
        this._nome = nome
    }
    get cpf(){
        return this._cpf
    }
    set cpf(cpf){
        this._cpf = cpf
    }
    get email(){
        return this._email
    }
    set email(email){
        this._email = email
    }
    get telefone(){
        return this._telefone
    }
    set telefone(telefone){
        this._telefone = telefone
    }
    get dataContratacao(){
        return this._dataContratacao
    }
    set dataContratacao(dataContratacao){
        this._dataContratacao = dataContratacao
    }
    get salario(){
        return this._salario
    }
    set salario(salario){
        this._salario = salario
    }
    imprimir(){
        console.log(`Matrícula: ${this._matricula}`)
        console.log(`Nome: ${this._nome}`)
        console.log(`CPF: ${this._cpf}`)
        console.log(`Email: ${this._email}`)
        console.log(`Telefone: ${this._telefone}`)
        console.log(`Data de Contratação: ${this._dataContratacao}`)
        console.log(`Salário: ${this._salario}`)
    }
}

module.exports = Funcionario