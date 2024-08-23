function executar(){

    let elementoNumeroUm = document.getElementById("numeroUm").value
    let elementoNumeroDois = document.getElementById("numeroDois").value
    let elementoNumeroTres = document.getElementById("numeroTres").value

    let resultadoFinal = Number(elementoNumeroUm) + 
    Number(elementoNumeroDois) + 
    Number(elementoNumeroTres)

    let elementoResultado = document.getElementById("resultado")

    elementoResultado.innerHTML = resultadoFinal

}