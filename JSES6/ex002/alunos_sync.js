const fs = require('fs');
const path = "./JSES6/ex002/alunos.json"


try {
    console.log('[SÍNCRONO] Iniciando a leitura do arquivo...');
    const dados = fs.readFileSync(path, 'utf8');

    console.log('[SÍNCRONO] Arquivo lido com sucesso!');
    const alunos = JSON.parse(dados);
    console.log('Dados originais:', alunos);


    const novoAluno = {
        ra: "234231",
        nome: "Bujex",
        dataNascimento: "2005-07-10",
        mediaCurso: 8.9
    };
    alunos.push(novoAluno);
    console.log('Dados após adição:', alunos);


    const dadosParaEscrever = JSON.stringify(alunos, null, 2);

    console.log('\n[SÍNCRONO] Iniciando a escrita no arquivo...');
    fs.writeFileSync(path, dadosParaEscrever, 'utf8');
    console.log('[SÍNCRONO] Arquivo atualizado com sucesso!');

} catch (erro) {
    console.error('Ocorreu um erro na operação síncrona:', erro);
}

console.log('[SÍNCRONO] Todas as operações foram finalizadas.');