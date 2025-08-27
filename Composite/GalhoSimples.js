const Construtivel = require("./Construtivel")

class GalhoSimples extends Construtivel {
    constructor(tamanho) {
        super();
        this.tamanho = tamanho
    }

    usarParaContrucao() {
        console.log(`usando galho simples de ${this.tamanho}cm.`);
        return this.tamanho
    }
}

module.exports = GalhoSimples