class Pessoa {
    _nome
    _rg
    _rendaMensal


    constructor(nome, rg, rendaMensal) {
        this._nome = nome
        this._rg = rg
        this._rendaMensal = rendaMensal
    }

    get rendaMensal() {
        return this._rendaMensal
    }

    calcularImposto() {

    }

    mostrarAtributos(){
        console.log(`nome:${this._nome} rg:${this._rg} rendaMensal:${this._rendaMensal}`)
    }
}

module.exports = Pessoa;
