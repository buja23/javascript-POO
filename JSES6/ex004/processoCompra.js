
function verificarEstoque(produto) {
    console.log(`\n1. Verificando estoque para: ${produto.nome}...`);

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (produto.quantidadeEstoque > 0) {
                console.log(`   [SUCESSO] Estoque disponível (${produto.quantidadeEstoque} unidades).`);
                resolve(produto); 
            } else {
                reject(`   [FALHA] Estoque esgotado para o produto: ${produto.nome}.`); 
            }
        }, 1500);
    });
}


function processarPagamento(produto) {
    console.log(`2. Processando pagamento de R$${produto.preco.toFixed(2)}...`);

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const pagamentoAprovado = Math.random() > 0.1; // Simula 90% de chance de aprovação
            if (pagamentoAprovado) {
                console.log('   [SUCESSO] Pagamento aprovado!');
                resolve(produto);
            } else {
                reject('   [FALHA] Pagamento recusado pela operadora.');
            }
        }, 2000);
    });
}


function enviarProduto(produto) {
    console.log(`3. Preparando o envio de: ${produto.nome}...`);
    
    return new Promise((resolve) => {
        setTimeout(() => {
            produto.quantidadeEstoque--; 
            console.log(`   [SUCESSO] Produto enviado! Estoque atualizado: ${produto.quantidadeEstoque}`);
            resolve(`Compra de "${produto.nome}" finalizada com sucesso!`);
        }, 2500);
    });
}

module.exports = { verificarEstoque, processarPagamento, enviarProduto };