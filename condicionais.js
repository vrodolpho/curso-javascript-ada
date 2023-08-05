// Estruturas condicionais

const idade = 10;

if (idade >= 18) {
    console.log('Você é maior de idade!') 
} else {
    console.log('Você é menor de idade!')
}

console.clear()

// Se média >= 7, aprovado
// Se média < 7 e média >= 5, recuperação.
// Se média < 5, reprovado.

let media = 6

if (media >= 7) {
    console.log("Aprovado")
} else if (media < 7 && media >= 5) {
    console.log("Recuperação")
} else {
    console.log("Reprovado")
}