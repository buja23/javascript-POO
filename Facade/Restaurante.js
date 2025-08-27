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
  
  // --- A Fachada (O Maître d') ---
  
  class MaîtreDFacade {
    constructor() {
      this.chefe = new ChefeDeCozinha();
      this.garcom = new Garcom();
      this.sommelier = new Sommelier();
    }
  
    // Este é o método simples que o cliente (você) interage
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
  
  // --- O Cliente (Você) ---
  
  const maitreD = new MaîtreDFacade();
  
  // Você apenas interage com o Maître d' para obter o que precisa,
  // sem saber a complexidade por trás.
  maitreD.pedirRefeicao("Filet Mignon", "vinho tinto");
  
  /*
  Saída no console:
  Garçom: Anotando o pedido: Filet Mignon.
  Sommelier: Sugerindo um vinho para harmonizar com Filet Mignon.
  Cozinha: Preparando a entrada.
  Cozinha: Preparando o prato principal.
  Cozinha: Preparando a sobremesa.
  Garçom: Servindo a mesa.
  
  Maître d': A sua refeição de Filet Mignon e vinho tinto está pronta. Bom apetite!
  */