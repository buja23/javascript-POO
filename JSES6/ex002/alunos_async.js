const fs = require('fs');
const path = "./JSES6/ex002/alunos.json"


console.log('[ASSÍNCRONO] leitura de arquivo...');

fs.readFile(path, 'utf8', (erro, dados) => {

    if (erro) {
        console.error('Erro ao ler o arquivo:', erro);
        return;
    }

    console.log('[ASSÍNCRONO] Arquivo lido com sucesso!');
    const alunos = JSON.parse(dados);
    console.log('Dados originais:', alunos);

    const novoAluno = {
        ra: "77733",
        nome: "Bispao",
        dataNascimento: "2006-01-30",
        mediaCurso: 3.8
    };
    alunos.push(novoAluno);
    console.log('Dados após adição:', alunos);


    const dadosParaEscrever = JSON.stringify(alunos, null, 2);

    console.log('\n[ASSÍNCRONO] Iniciando a escrita no arquivo...');
    fs.writeFile(path, dadosParaEscrever, 'utf8', (erroEscrita) => {
        if (erroEscrita) {
            console.error('Erro ao escrever no arquivo:', erroEscrita);
            return;
        }
        console.log('[ASSÍNCRONO] Arquivo atualizado com sucesso!');
    });

    console.log('[ASSÍNCRONO] A escrita foi agendada, mas o código continua...');
});

console.log('[ASSÍNCRONO] Leitura agendada. O script continua a executar enquanto o arquivo é lido em segundo plano.');