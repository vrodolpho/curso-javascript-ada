// Métodos do Array

// Fatiamento - Slice: retorna o intervalo do array

let arr1 =  [30, 12, 45, 34, 29]
let arr2 = []

console.log(arr1.slice(0, 2)) // No array ele não considera o 1 como parâmetro.
console.log(arr1.slice(2)) // retorna no indice 2 até o final do array.

console.clear()
// Adicionando elementos: push | unshift

console.log('Antes de adicionar push:', arr2)

arr2.push(10, 20) // adiciona no final do array

console.log('Depois de adicionar push:', arr2)

console.log('Antes de adicionar unshift:', arr2)

arr2.unshift(0) // adiciona no inicio do array

console.log('Depois de adicionar unshift:', arr2)

console.clear()

// Removendo Elementos: pop | shift

console.log('Antes de remover com o pop:', arr2)

const elementoRemovido = arr2.pop() // remove o último elemento
console.log('O elemento removido foi', elementoRemovido)
console.log(arr2)

console.log('Antes de remover com o shift:', arr2)

arr2.shift() // remove o primeiro elemento
console.log('Depois de remover com o shift:', arr2)

console.clear()
// Concatenando arrays: concat

console.log(arr1)
console.log(arr2)

console.log(arr1.concat(arr2))
console.log(arr2.concat(arr1))

console.clear()

// Buscando elemento: indexOf | lastIndexOf

console.log(arr1)

let indiceDoElemento34 = arr1.indexOf(34)

console.log(indiceDoElemento34)

let arr3 = [1, 2, 3, 3, 5, 3]

console.log(arr3.indexOf(3)) // retorna o indice do primeiro elemento conforme o parâmetro.
console.log(arr3.lastIndexOf(3)) // retorna o indice do último elemento conforme o parâmetro.

console.clear()

// Descobrindo a existência de um elemento: includes

console.log(arr1)

console.log(arr1.includes(10)) // retorna true ou false

console.clear()

// Invertendo arrays: reverse

console.log('Arr1 normal:', arr1)

const arr1Invertido = arr1.reverse()

console.log('Arr1 invertido:', arr1Invertido)