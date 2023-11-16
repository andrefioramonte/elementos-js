
'use strict'

const botaoSequencia = document.getElementById('botao-sequencia')
const botaoImpar = document.getElementById('botao-impar')
const botaoPar = document.getElementById('botao-par')
const botaoMultiplo = document.getElementById('botao-multiplo')
const botaoCalcular = document.getElementById('botao-calcular')
const botaoLimpar = document.getElementById('botao-limpar')


function gerarSequencia() {
    const quantidade = document.getElementById('quantidade')
    const resultado = document.getElementById('resultado')


    resultado.textContent = ' '
    for (let contador = 1; contador <= quantidade.value; contador++) {
        

        const tagSpan = document.createElement('span')
        tagSpan.textContent = contador
        resultado.appendChild (tagSpan)
    }


}
function gerarNumeroImpares() {
    const quantidade = document.getElementById('quantidade')
    const resultadoImpar = document.getElementById('resultado-impar')

    resultadoImpar.textContent = ' '

    for (let contador = 1; contador <= quantidade.value; contador += 2) {
        resultadoImpar.textContent += " " + contador
    }
}
function gerarNumeroPares() {

    const quantidade = document.getElementById('quantidade')

    const resultadoPar = document.getElementById('resultado-par')

    resultadoPar.textContent = ' '

    for (let contador = 0; contador <= quantidade.value; contador += 2) {
        resultadoPar.textContent += " " + contador
    }
}
function gerarMultiplos() {

    const quantidade = document.getElementById('quantidade')

    const resultadoMultiplos = document.getElementById('resultado-multiplo')

    resultadoMultiplos.textContent = ' '

    for (let contador = 0; contador <= quantidade.value; contador += 5) {
        resultadoMultiplos.textContent += " " + contador
    }
}
function limpar(){
    const quantidade = document.getElementById('quantidade')
    const resultado = document.getElementById('resultado')
    const resultadoImpar = document.getElementById('resultado-impar')
    const resultadoPar = document.getElementById('resultado-par')
    const resultadoMultiplos = document.getElementById('resultado-multiplo')


    resultado.textContent = ' '
    resultadoImpar.textContent = ' '
    resultadoPar.textContent = ' '
    resultadoMultiplos.textContent = ' '
    quantidade.value = ''
}
botaoSequencia.addEventListener('click', gerarSequencia)
botaoImpar.addEventListener('click', gerarNumeroImpares)
botaoPar.addEventListener('click', gerarNumeroPares)
botaoMultiplo.addEventListener('click',gerarMultiplos)

botaoCalcular.addEventListener('click',gerarSequencia)
botaoCalcular.addEventListener('click',gerarNumeroImpares)
botaoCalcular.addEventListener('click',gerarNumeroPares)
botaoCalcular.addEventListener('click',gerarMultiplos)

botaoLimpar.addEventListener('click', limpar )