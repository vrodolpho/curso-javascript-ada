// Como criar um array?

let arr = ['Vagner', 26, 1.80, true]

console.log(arr)

// Como acessar os elementos do array?

console.log('Primeiro elemento:', arr[0]);
console.log('Segundo elemento:', arr[1]);
console.log('Terceiro elemento:', arr[2]);
console.log('Quarto elemento:', arr[3]);

// Como obter o tamanho do array?

console.log('Tamanho do array:', arr.length)

// Percorrendo o array

for (let i = 0; i < arr.length; i++) { // pega o tamanho do array com arr.length
    console.log(arr[i])
}

console.clear()

for (let elemento of arr) { // percorre cada elemento dentro do array
    console.log(elemento)

}

console.clear()

for (let indice in arr) { // percorre cada indice do array
    console.log(indice, arr[indice])
}