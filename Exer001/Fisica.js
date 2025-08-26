const Pessoa = require('./Pessoa');

class Fisica extends Pessoa {
    constructor(nome, rg, rendaMensal){
        super(nome, rg, rendaMensal)
    }


    calcularImposto() {
        let aliota
        const renda = this.rendaMensal

        if (renda <= 2100.00) {
            aliota = 0
        } else if (renda <= 2800.00) {
            aliota = 0.075
        } else if (renda <= 3700.00) {
            aliota = 0.15
        } else if (renda <= 4600.00) {
            aliota = 0.225
        } else {
            aliota = 0.227
        }
        return renda * aliota
    }
}

module.exports = Fisica;
