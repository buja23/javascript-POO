class Produto{
    #codigo
    #nome
    #descricao
    #marca
    #quantidade
    #preco
    constructor(codigo, nome, descricao, marca, quantidade, preco){
        this.#codigo = codigo
        this.#nome = nome
        this.#descricao = descricao
        this.#marca = marca
        this.#quantidade = quantidade
        this.#preco = preco
    }
    get codigo(){
        return this.#codigo
    }
    set codigo(codigo){
        this.#codigo = codigo
    }
    get nome(){
        return this.#nome
    }
    set nome(nome){
        this.#nome = nome
    }
    get descricao(){
        return this.#descricao
    }
    set descricao(descricao){
        this.#descricao = descricao
    }
    get marca(){
        return this.#marca
    }
    set marca(marca){
        this.#marca = marca
    }
    get quantidade(){
        return this.#quantidade
    }
    set quantidade(quantidade){
        this.#quantidade = quantidade
    }
    get preco(){
        return this.#preco
    }
    set preco(preco){
        this.#preco = preco
    }

    aplicarDesconto(percentual){
        const desconto = (this.#preco * percentual) / 100
        this.#preco = this.#preco - desconto
    }

    imprimir(){
        console.log(`Código: ${this.#codigo}`)
        console.log(`Nome: ${this.#nome}`)
        console.log(`Descrição: ${this.#descricao}`)
        console.log(`Marca: ${this.#marca}`)
        console.log(`Quantidade: ${this.#quantidade}`)
        console.log(`Preço: R$${this.#preco.toFixed(2)}`)
    }
}

module.exports = Produto;