// Exercicio 1
let stringNumbers = "1234";
let numerosConvertidos = parseInt(stringNumbers)

console.log(typeof stringNumbers)
console.log(typeof numerosConvertidos)

console.log(stringNumbers)
console.log(numerosConvertidos)

// Exercicio 2

let frase = "Javascript é incrível";
let fraseNumerosCaracteres = frase.length;
let fraseNumerosDePalavras = frase.split(" ");

console.log(`A frase "${frase}" tem ${fraseNumerosCaracteres} caracteres, e ${fraseNumerosDePalavras.length} palavras.`)

// Exercicio 3

let listaDeNomes = ["Mandrake", "Yamato", "Menor", "Pecinha"];

for(let i = 0 ; i < listaDeNomes.length; i++) {
    console.log(listaDeNomes[i])
}