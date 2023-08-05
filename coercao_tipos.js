// Coerção (conversão) de tipos

// Coerção Explícita

const numero = 10;

console.log(numero, typeof numero)

const numeroEmFormatoDeString = String(numero)
console.log(numeroEmFormatoDeString, typeof numeroEmFormatoDeString)

console.log(Number('123'))
console.log(parseFloat(123.12))
console.log(parseInt(123.12))
console.log(Boolean(1)) // Condições 1=true e 0=false

console.clear() // Limpa o terminal.

console.log(10 + '1')

let n = 1 + '1'; // Os dados são concatenados.
n = n - 1; // Nesse momento por conta da subtração ele converte para número.
console.log(n)

// Qual serão as saídas?
console.log(2 + 3 + 4 + "5"); // 95
console.log("5" + 2 + 3 + 4); // 5234
console.log("10" - "4" - "3" - 2 + "5"); // 15