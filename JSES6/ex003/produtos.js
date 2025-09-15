
const fs = require('fs/promises');
const path = "./JSES6/ex002/produtos.json"


async function lerProdutos() {
    try {
        console.log('Iniciando a leitura do arquivo...');
        
        const dados = await fs.readFile(path, 'utf8');
        
        const produtos = JSON.parse(dados);
        
        console.log('Arquivo lido e processado com sucesso!');
        return produtos;

    } catch (erro) {
        console.error('Ocorreu um erro ao LER o arquivo:', erro);
        
        return []; 
    }
}


async function escreverProdutos(produtos) {
    try {
        console.log('\nIniciando a escrita no arquivo...');
        const dadosParaEscrever = JSON.stringify(produtos, null, 2);
    
        await fs.writeFile(path, dadosParaEscrever, 'utf8');

        console.log('Arquivo atualizado com sucesso!');

    } catch (erro) {
        console.error('Ocorreu um erro ao ESCREVER no arquivo:', erro);
    }
}


async function main() {
    let listaDeProdutos = await lerProdutos();
    console.log('\nProdutos atuais no sistema:', listaDeProdutos);
    
    const novoProduto = {
        nome: "Monitor Ultrawide 29\"",
        preco: 1299.90,
        quantidadeEstoque: 12
    };

    listaDeProdutos.push(novoProduto);
    console.log('\nNovo produto adicionado:', novoProduto);

    await escreverProdutos(listaDeProdutos);
    console.log('\n--- Processo Finalizado ---');
}

main();