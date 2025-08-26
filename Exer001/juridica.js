const Pessoa = require('./Pessoa');

class juridica extends Pessoa{
    constructor(nome, rg, rendaMensal){
        super(nome, rg ,rendaMensal)
    }

    calcularImposto(){
        const aliota = 0.15
        const imposto = this.rendaMensal * aliota
        return imposto
    }
}

module.exports = juridica;