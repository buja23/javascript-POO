const Construtivel = require("./Construtivel")

class Tronco extends Construtivel {
    constructor() {
        super();
        this.materiais = []
    }

    adicionar(material) {
        this.materiais.push(material)
    }

    usarParaContrucao() {
        let tamanhoTotal = 0
        console.log("divindo o tronco em pedaços")
        this.materiais.forEach(material => {
            tamanhoTotal += material.usarParaContrucao()
        })
        return tamanhoTotal
    }
}

module.exports = Tronco