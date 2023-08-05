// Funções

// Definição da função

function saudacao() {
    console.log('Olá, seja bem-vindo ao nosso curso de JavaScript!')
}

saudacao() // posso chamar a função várias vezes.
saudacao()
saudacao()

console.clear()

// Como enviar parâmetros para as funções?

function saudacao(nome) { // Inlusão de parâmetro na função
//    console.log(nome)
    console.log(`Olá, ${nome} seja bem-vindo ao nosso curso de JavaScript!`)
}

saudacao('Davi')

console.clear()

function saudacao(nome, curso='JavaCript') { // Inlusão de parâmetro na função
    //    console.log(nome)
        console.log(`Olá, ${nome} seja bem-vindo ao nosso curso de ${curso}!`)
    }
    
saudacao('Lara', 'HTML e CSS') // O segundo parâmetro "HTML..." é utilizado para imprimir da função, porém esse comando pode ser utilizado quando não for definido.

// Retorno da função

function soma(numero1, numero2) { 
//  console.log('Soma=', numero1 + numero2)
    return numero1 + numero2 // a ideia da função é sempre retornar uma informação.
}

// soma(10, 20)

const resultado = soma(10, 20)

console.log(resultado / 2)

console.clear()

function maiorDoQue50(numero) {
    if (numero > 50) {
        return true // o return é no final do código, porém depende da estrutura com as condições.
    }
    return false
}

