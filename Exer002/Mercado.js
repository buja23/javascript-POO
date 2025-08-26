    class mercado{
        #nome
        #cnpj
        #endereco
        #redeSocial
        #listaProdutos
        constructor(nome, cnpj, endereco, redeSocial, listaProdutos){
            this.#nome = nome
            this.#cnpj = cnpj
            this.#endereco = endereco
            this.#redeSocial = redeSocial
            this.#listaProdutos = listaProdutos
        }

        get nome(){
            return this.#nome
        }

        set nome(nome){
            this.#nome = nome;
        }

        get cnpj(){
            return this.#cnpj
        }

        set cnpj(cnpj){
            this.#cnpj = cnpj
        }
        
        get endereco(){
            return this.#endereco
        }

        set endereco(endereco){
            this.#endereco = endereco
        }

        get redeSocial(){
            return this.#redeSocial
        }

        set redeSocial(redeSocial){
            this.#redeSocial = redeSocial
        }

        get listaProdutos(){
            return this.#listaProdutos
        }

        set listaProdutos(listaProdutos){
            this.#listaProdutos = listaProdutos
        }

        adicionarProduto(produto){
            this.#listaProdutos.push(produto)
        }

        excluirProduto(){
            this.#listaProdutos.pop()
        }
        
        buscarProduto(codigo){
            this.#listaProdutos.find()
        }

        encontrarProdutoMaisCaro(){
            let caro = this.#listaProdutos[0]
            for(let i = 1; i < this.#listaProdutos.length; i++){
                if(this.#listaProdutos[i].preco > caro.preco){
                    caro = this.#listaProdutos[i]
                }
            }
        }

        imprimirProdutos(){
            this.#listaProdutos.forEach(produto => {
                console.log(produto)
            });
        }

        calcularValorMercado(){
            let valorTotal = 0
            for (const produto of this.#listaProdutos) {
            valorTotal += produto.preco * produto.quantidade;
            }
            return valorTotal
        }

        imprimir(){
            console.log(`Nome: ${this.#nome}`)
            console.log(`CNPJ: ${this.#cnpj}`)
            console.log(`Endereço: ${this.#endereco}`)
            console.log(`Redes Sociais: ${this.#redeSocial}`)
            console.log(`Lista de Produtos: ${this.#listaProdutos}`)
        }
    }

    module.exports = mercado