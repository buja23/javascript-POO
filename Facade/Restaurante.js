// --- Os Subsistemas Complexos ---

class ChefeDeCozinha {
    prepararEntrada() {
      console.log("Cozinha: Preparando a entrada.");
    }
    prepararPratoPrincipal() {
      console.log("Cozinha: Preparando o prato principal.");
    }
    prepararSobremesa() {
      console.log("Cozinha: Preparando a sobremesa.");
    }
  }
  
  class Garcom {
    anotarPedido(pedido) {
      console.log(`Garçom: Anotando o pedido: ${pedido}.`);
    }
    servirMesa() {
      console.log("Garçom: Servindo a mesa.");
    }
  }
  
  class Sommelier {
    sugerirVinho(prato) {
      console.log(`Sommelier: Sugerindo um vinho para harmonizar com ${prato}.`);
    }
  }
  
  
  class MaîtreDFacade {
    constructor() {
      this.chefe = new ChefeDeCozinha();
      this.garcom = new Garcom();
      this.sommelier = new Sommelier();
    }
  
    pedirRefeicao(prato, bebida) {
      this.garcom.anotarPedido(prato);
      this.sommelier.sugerirVinho(prato);
      this.chefe.prepararEntrada();
      this.chefe.prepararPratoPrincipal();
      this.chefe.prepararSobremesa();
      this.garcom.servirMesa();
      console.log(`\nMaître d': A sua refeição de ${prato} e ${bebida} está pronta. Bom apetite!`);
    }
  }
  

  
  const maitreD = new MaîtreDFacade();
  maitreD.pedirRefeicao("Filet Mignon", "vinho tinto");
  