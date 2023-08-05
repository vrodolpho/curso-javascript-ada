// Laços Condicionais
// Importante verificar se foi instalada a biblioteca readline-sync pelo terminal do Node.Js com o código 'npm install readline-sync' (a instalação será no diretório onde estão os arquivos .js) para ser global precisa ser com -g.

const input = require('readline-sync') // Importa a biblioteca para ler a entrada de dados.

const numero_sorteado = 5;

let numero = Number(input.question('Qual numero voce escolhe?'))

console.log(numero, typeof numero)

while (numero !== numero_sorteado){
    console.log('Você errou o número. Tente novamente...')
    numero = Number(input.question('Qual numero voce escolhe?'))
}
console.log('Voce acertou!')