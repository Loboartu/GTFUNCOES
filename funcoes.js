
// funções 

function name(params) {
    //bloco de código
}

//declarando uma função
function cumprimentar(nome) {
    console.log (`Olá ${nome}`)
}

cumprimentar(`marta`)

//função sem retorno

function somar(a,b) {
    let soma = a + b
    console.log (soma)
}
somar(10,5)
//função com retorno

function subtrair (a,b) {
    let subtração = a - b 
    return subtração
}

console.log(subtrair(15,5)) //onde  eu chamar a função vai ser substituido pelo retorno


// const somar = function () => { //arrow funtion (função de sete)

//outro exemplo de funções

let escopoExterno = "Tenho uma variável de escopo global"

function testeEscopo () {
    let escopoInterno = "esta variável possui escopo local"
    console.log (escopoExterno)
    console.logo (escopoInterno)
    
}

testeEscopo()

// console.log(escopoExterno)
// console.log(escopoInterno)
   
//funções também são chamadas de métodos
//no javascript tudo é objeto

alert(`Olá`) //valor de parametro é default
prompt(`digite seu nome`) //valor de parâmetro muda


function somar(a,b) {
    return a + b 

}


const subtrair = (a,b) => a - b 

//callback - função de retorno


function mostrarCallback (callback) {

}