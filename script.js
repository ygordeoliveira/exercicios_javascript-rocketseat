let x

x = 1
console.log(x)

//Isso é igual que fazer x = x + 1//
x += 2
console.log(x)

//Isso é igual a fazer x = x - 1//
x -= 1
console.log(x)

//Isso aqui é igual fazer x = x * 2//
x *= 2
console.log(x)

//Isso aqui é igual fazer x = x / 2
x /= 2
console.log(x)

//Isso aqui fazemos para o resto da divisao//
x %= 2
console.log(x)

x **= 2
console.log(x)

let pao = true
let queijo = false

const niceBreakfast = pao || queijo ? 'Café top' : 'Café ruim'
console.log(niceBreakfast)

let age = 18
const canDrive = age >= 18 ? 'can drive' : "can't drive"
console.log(canDrive)

//Isso que vai retornar todas as palavras em uma string//
let alpha = 'alpha'
alpha += 'bet'
console.log(alpha + 345)

//Na primeira vai retornar falso porque o tipo valor é considerado falso //
console.log(false ? 'verdadeiro' : 'falso')

console.log(1 ? 'verdadeiro' : 'falso')

let temparature = 36.9
let highTemparature = temparature >= 37.5
let mediumTemparature = temparature < 37.5 && temparature >= 37

if(highTemparature) {
    console.log('Febre')
}else if(mediumTemparature ){
    console.log('Febre moderada')
}else{
    console.log('Saudável')
}
   
//Com o switch eu guardo os operdores de um calculo e faço o calculo chamando a função//
function calculate(number1, operator, number2){
    let result

    switch (operator) {
        case '+':
            result = number1 + number2
            break;
    
        case '-':
            result = number1 - number2
            break

        case '*':
            result = number1 * number2
            break

        case '/':
            result = number1 / number2
            break

        default:
            console.log('nao implementado')
            break;
    }

    return result
}

console.log(calculate(4, '+', 8))

//A minha função vai receber o nome vazio, se for vazio vou disparar um erro e o //
function SayName(name = '') {
    if(name === '') {
        throw 'Nome é obrigatório'
    }

    console.log(name)
}

try {
    SayName('Ygor')
} catch(e) {
    console.log(e)
}

console.log('após o try/catch')

//Aqui eu inicio a variavel com o 10 até o 1 não tendo o 5, depois uma condiçao de continuaçao desse lopping e deço o valor de cima pra baixo//
for(let i = 10; i > 0; i--){
    if(i === 5){
        continue;
    }

    console.log(i)
}

//O for of é declaraçao que vai criar um loop através de uma variavel que eu tiver//
//Pode ser uma varivel do tipo String ou Arrays//
//No for eu vou tirar uma letra de cada caracter do 'Mayk'//
//Primeiro: vou criar uma variavel que vai conter um caracter//
//Segundo: Esse caracter vai ter um caracter de name,então pege um caracter de aluno//
//Terceiro: Então no primeiro loop ele vai pegar a letra m e vai imprimir no console//


  //O for in ele vai criar um loop em cima de um objeto pegando as propriedades desse objeto//
  //Primeiro: vou colocar um objeto na minha variavel e essa pessoa vai ter um name,age e um peso//
  //Segundo: vou criar uma variavel pra conter essa propriedade in person que é um objeto//
  //No objeto pegue a propriedade e atribua na variavel let//
  //Então mostrará pra mim o name - age e o peso//

  let i = 0;
  while(i < 10){
    console.log(i)

    i++;
  }


  //A minha varivel score vai guardar o numero 90//
  //Se minha nota for maior ou igual a 90 eu vou colocar minha nota no console//
  //Só aparecera no meu console notas que sejam maior que 90//
  //Cria uma que dentro dessa variavel estará guardada essa condiçao da nota acima de 90 e tem que sem ser igual ou menor que 100//
  //Então só receberei notas de 90 até 100//
  //Maior que 100 não validara, será falso se a nota for maior que 100//

let score = 95

 function getScore(score) {
    let scoreA = score >= 90 && score <= 100;
    let scoreB = score >= 80 && score <=89;
    let scoreC = score >= 70 && score <=79;
    let scoreD = score >= 60 && score <= 69;
    let scoreF = score < 60  && score >= 0;

    let scoreFinal;

    if(scoreA){
        scoreFinal = "A"
    } else if(scoreB){
        scoreFinal = "B"
    } else if(scoreC){
        scoreFinal = "C"
    } else if(scoreD){
        scoreFinal = "D"
    } else if(scoreF){
        scoreFinal = "F"
    } else {
        scoreFinal = "Nota inválida"
    }

    return scoreFinal;
    }

    console.log(getScore(101))
    console.log(getScore(-1))
    console.log(getScore(0))
    console.log(getScore(1))
    console.log(getScore(45))
    console.log(getScore(60))
    console.log(getScore(61))
    console.log(getScore(75))
    console.log(getScore(85))
    console.log(getScore(95))

  let f = 0;
  let aluno = 'Mayk'
  let alunos = ['João','Paulo','Pedro']

  while (aluno.length){
    console.log(aluno);
    
   aluno++;
  }