

const numero = 10;

console.log(numero == 10)
console.log(numero > 20)
console.log(numero === '10') // compara no conteúdo e o tipo.

console.clear()

console.log(numero != 10)
console.log(numero != '10')
console.log(numero !== '10')

// Conjunções lógicas

// AND => &&

let idade = 18;
let tenhoCNH = true;

const possoDirigir = idade >= 18 && tenhoCNH === true; // AND

console.log('Posso dirigir?', possoDirigir)

// OR  => ||

idade = 40;

const votoFacultativo = idade < 18 || idade >= 70;
console.log(votoFacultativo)
// NOT => !

const estouGostandoDoCurso = false;

console.log(!estouGostandoDoCurso) // o sinal de exclamação inverte o resultado.