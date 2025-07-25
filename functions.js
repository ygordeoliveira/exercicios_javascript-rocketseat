//Vou criar um aplicativo de frases motivacionais//
function createPhrases(){
    console.log('Estudar é muito bom')
    console.log('Paciencia e persistencia')                                 //A funçao serve pra eu guardar codigos e reutilizar quando eu quiser chamando ela//
    console.log('Revisao é a mãe do aprendizado')
}

//Coloco o nome dela e (), assim chamamos a nossa funçao//
createPhrases()

let total = 0;
//Eu posso declarar funçoes dentro de uma variavel,essa linha é funçao anonima porque não tem nenhum nome//
const sum = function (number1, number2 ) { 
     let total = number1 + number2
     return total
}

let number1 = 34
let number2 = 25

//A funçao sum vai receber 2 argumentos e dentro da funçao sum vai receber um calculo//
sum(2 , 3)
console.log(`a soma é ${sum(number1, number2)}`);         //Ele retorna o que a soma que esta dentro da funçao//
console.log(total)                                        //Aqui ele retorna o let que esta fora da funçao//

//A minha funçao é uma batedeira, eu vou colocar as frutas e vai me retornar a junçao das frutas//
function fazerSuco(fruta1, fruta2){
    return fruta1,fruta2
}

//Ao fazer isso, eu entro na minha funçao banana e maça,e eu preciso de um copo pra receber o suco//
const copo = fazerSuco("banana","maçã")                              

//Aqui eu vou ver o que tem dentro do copo//
console.log(copo)     

//Aqui fora criei uma variavel subject e uma funçao que vai criar um pensamento e vou receber o nome da variavel e colocar o valor//
let subject;

function createThink(subject) {
     subject = 'study'
}

console.log(subject)
createThink()
console.log(subject)

//Aqui no primeiro console vai dar undefined,na linha de baixo nao vai fazer nada so vai atualizar e na 3 vai mostrar//

//Arrow function eu atribuo a ela uma const e ela vai receber em vez de uma function ela vai receber uma seta que significa arrow//
const sayMyName = (name) => {
    console.log(name)
}

sayMyName('Ygor')

//Tenho a expressao new que uso na frente da funçao,ela vai retornar um objeto e dentro da minha funçao eu faço o molde desse objeto usando o this//
function Person(name) {
    this.name = name
    this.walk = function() {
        return this.name + " está andando "
    }
}

const mayk = new Person("Mayk")
const joao = new Person("Joao")
console.log(mayk.walk())
console.log(joao.walk())

//Aqui vou transformar a minhas letras em MAIUSCULAS e tambem posso colocar em minusculas//
let word = "Programar é muito bacana!"
console.log(word.toUpperCase().toLowerCase())

//Vou pegar a frase e vai receber o split,que vai me dar 1 argumento do que eu quero separar desta frase e vou pegar o myArray.join que vai juntar o Array//
let phrase = "Eu quero viver o Amor"
let myArray = phrase.split(" ")
let phraseWithUnderscore = myArray.join("_") 
console.log(phraseWithUnderscore.toLowerCase())

//Aqui eu transformo uma cadeia de caracteres em elementos, pegando o Array.from que vai retornar cada letra em elemento de um Array//
let world = "manipulaçao"
console.log(Array.from(world))

//Aqui eu tenho 3 elementos e para cortar 1 elemento uso o metodo slice que vai receber qual a posiçao de inicio que eu quero cortar, tipo eu quero que inicie a partir da posiçao 1 e qual a posiçao final do Array//
let techs =  ["html","css","js"]
console.log(techs.slice(1,3))
techs.splice(1, 2)
//O techs splice vai remover um elemento de um array//

let index = techs.indexOf("css")
techs.splice(index,1)

console.log(techs)
//Aqui eu quis saber qual era a posiçao do index html e removo esse elemento pela posiçao dele//

let number = 1;

console.log(true ? 'alo' : 'nada')
//Isso é um operador binario que significa sao 2 valores que eu preciso pra que o o perador esteja entre eles//
//O operador ternario vai receber uma expressao entao ele vai mostrar o alo senao nada//

let b;

console.log(b);
b = 1
