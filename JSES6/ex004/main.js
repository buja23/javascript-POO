
const { carregarProdutos } = require('./gerenciadorArquivos');
const { verificarEstoque, processarPagamento, enviarProduto } = require('./processoCompra');


async function iniciarProcessoDeCompra(nomeDoProduto) {

    console.log(`INICIANDO SIMULAÇÃO DE COMPRA PARA: "${nomeDoProduto}"`);
    console.log('===================================================');

    try {
        const listaDeProdutos = await carregarProdutos();
        const produtoDesejado = listaDeProdutos.find(
            produto => produto.nome.toLowerCase() === nomeDoProduto.toLowerCase()
        );

        
        if (!produtoDesejado) {
            throw new Error(`Produto "${nomeDoProduto}" não encontrado no catálogo.`);
        }
        
        produtoDesejado.exibirInfo();

        await verificarEstoque(produtoDesejado);
        await processarPagamento(produtoDesejado);
        const mensagemFinal = await enviarProduto(produtoDesejado);

        console.log('\n-------------------------------------------------');
        console.log(mensagemFinal);
        console.log('-------------------------------------------------');

    } catch (erro) {
        console.error('\n!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!');
        console.error(`Ocorreu um erro no processo de compra: ${erro}`);
        console.error('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!');
    }
}


iniciarProcessoDeCompra("Teclado Mecânico Compacto");

setTimeout(() => {
    iniciarProcessoDeCompra("Monitor 4K 27\"");
}, 10000); 


setTimeout(() => {
    iniciarProcessoDeCompra("Webcam Full HD");
}, 15000); 