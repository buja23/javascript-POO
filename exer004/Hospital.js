class Hospital{
    constructor(name, endereco, listaFuncionarios = []){
        this.name = name
        this.endereco = endereco
        this.listaFuncionarios = []
    }

    get name(){
        return this._name
    }
    set name(name){
        this._name = name
    }
    get endereco(){
        return this._endereco
    }
    set endereco(endereco){
        this._endereco = endereco
    }
    get listaFuncionarios(){
        return this._listaFuncionarios
    }
    set listaFuncionarios(listaFuncionarios){
        this._listaFuncionarios = listaFuncionarios
    }
    adicionarFuncionario(funcionario){
        this._listaFuncionarios.push(funcionario)
    }
    excluirFuncionario(matricula){
        this._listaFuncionarios = this._listaFuncionarios.filter(funcionario => funcionario.matricula !== matricula)
    }
    buscarFuncionario(nome){
        return this._listaFuncionarios.find(funcionario => funcionario.nome === nome)
    }
    exibirTodosFuncionarios(){
        this._listaFuncionarios.forEach(funcionario => funcionario.imprimir())
    }
    exibirFuncionariosAnoContrato(ano){
        this._listaFuncionarios
            .filter(funcionario => new Date(funcionario.dataContratacao).getFullYear() === ano)
            .forEach(funcionario => funcionario.imprimir())
    }
    imprimir(){
        console.log(`Nome do Hospital: ${this._name}`)
        console.log(`Endereço: ${this._endereco}`)
        console.log(`Lista de Funcionários: ${this._listaFuncionarios}`)
        console.log("--- Funcionários do Hospital ---");
        this._listaFuncionarios.forEach(funcionario => {
            funcionario.imprimir();
        });
    }

}

module.exports = Hospital