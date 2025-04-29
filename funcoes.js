
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
    
