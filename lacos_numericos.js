// Laços Númericos / For

const input = require('readline-sync')

// o problema

const nota1 = Number(input.question(`Informe a nota 1: `))
const nota2 = Number(input.question(`Informe a nota 2: `))
const nota3 = Number(input.question(`Informe a nota 3: `))

let media = (nota1 + nota2 + nota3) / 3
console.log(media)

// Acumulador

let acumulador = 0;
acumulador = acumulador + 10 // cálcula o valor declarado + 10.
acumulador += 2 // adiciona 2
acumulador++ // adiciona 1
console.log(acumulador)

// Estrutura For

for (let i = 0; i <= 4; i++) {
    console.log('Repetição', i)
}

console.clear()

for (let i = 10; i <= 12; i++) {
    console.log('Repetição', i)
}

for (let i = 12; i > 8; i--) {
    console.log('Repetição', i)
}

console.clear()

// Resolvendo o problema inicial

let nota;
let soma = 0;

for (let i = 1; i <= 3; i++) { // Adicionando mais 1 no i no looping até a condição do for.
    nota = Number(input.question(`Informe a nota ${i} do aluno: `)) // Incluindo a crase podemos informar a variável para ser imprimida na saída.

    soma = soma + nota
}

console.log(soma)