function imprimePares() {
    let imprimeResultado = document.getElementById("numerosPar")
    let pares = ''
    for (let i = 1; i <= 100; i++) {
        if (i % 2 == 0) {
            pares += `${i} | `
        }
    }
    imprimeResultado.innerHTML = pares
}

function limpaPar() {
    let limpaTela = document.getElementById("numerosPar")
    limpaTela.innerHTML = 'Resultado...'
}

function calculaMedia() {
    let primeiroValor = document.getElementById("notaUm").value
    let segundoValor = document.getElementById("notaDois").value
    let terceiroValor = document.getElementById("notaTres").value
    let imprimeResultado = document.getElementById("resultadoMedia")

    let somaNotas = Number(primeiroValor) + Number(segundoValor) + Number(terceiroValor)
    let resultado = somaNotas / 3

    if (primeiroValor > 10 || segundoValor > 10 || terceiroValor > 10) {
        imprimeResultado.innerText = "O valor máximo para cada nota é 10"
        imprimeResultado.style.backgroundColor = "#FF6961"
    } else if (primeiroValor < 0 || segundoValor < 0 || terceiroValor < 0) {
        imprimeResultado.innerText = "Digite uma nota válida"
        imprimeResultado.style.backgroundColor = "#FF6961"
    } else if (resultado > 5.9) {
        imprimeResultado.innerText = "Aprovado!"
        imprimeResultado.style.backgroundColor = "#90EE90"
    } else {
        imprimeResultado.innerText = "Reprovado!"
        imprimeResultado.style.backgroundColor = "#FF6961"
    }
}
function limpaMedia() {
    let limpaTela = document.getElementById("resultadoMedia")
    limpaTela.innerHTML = 'Resultado...'
    limpaTela.style = "none"
}

function menorNumero() {
    let primeiroNumero = document.getElementById("menorUm").value
    let segundoNumero = document.getElementById("menorDois").value
    let imprimeResultado = document.getElementById("resultadoMenor")

    if (Number(primeiroNumero) < Number(segundoNumero)) {
        imprimeResultado.innerHTML = `O primeiro : ${Number(primeiroNumero)}`
    } else {
        imprimeResultado.innerHTML = `O segundo : ${Number(segundoNumero)}`
    }
}

function limpaMenor() {
    let limpaTela = document.getElementById("resultadoMenor")
    limpaTela.innerHTML = 'Resultado...'
}

function maiorNumero() {
    let primeiroNumero = document.getElementById("maiorUm").value
    let segundoNumero = document.getElementById("maiorDois").value
    let imprimeResultado = document.getElementById("resultadoMaior")

    if (Number(primeiroNumero) > Number(segundoNumero)) {
        imprimeResultado.innerHTML = `O primeiro : ${Number(primeiroNumero)}`
    } else {
        imprimeResultado.innerHTML = `O segundo : ${Number(segundoNumero)}`
    }
}

function limpaMaior() {
    let limpaTela = document.getElementById("resultadoMaior")
    limpaTela.innerHTML = 'Resultado...'
}