const GalhoSimples = require("./GalhoSimples")
const tronco = require("./Tronco")

const g1 = new GalhoSimples(50)
const g2 = new GalhoSimples(30)

const tronco1 = new tronco();

tronco1.adicionar(g1)
tronco1.adicionar(g2)

const tronco2 = new tronco();
tronco2.adicionar(new GalhoSimples(10))
tronco2.adicionar(new GalhoSimples(15))

tronco1.adicionar(tronco2)

console.log("---Contruindo---")
const tamanhoContrucao = tronco1.usarParaContrucao()
console.log(`tamanho total usado na contrução ${tamanhoContrucao}cm`)