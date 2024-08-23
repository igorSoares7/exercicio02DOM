
    function executar() {
        let inputUm = document.getElementById("primeiroInput").value
        let inputDois = document.getElementById("segundoInput").value
        let inputTres = document.getElementById("terceiroInput").value

        let somaDosInputs = Number(inputUm) + Number(inputDois) + Number(inputTres)

        let imprimeResultado = document.getElementById("resultado")

        if (isNaN(somaDosInputs)) {
            imprimeResultado.innerHTML = "Digite um valor válido! Apenas números!"
            imprimeResultado.style.backgroundColor = "#FF6961"
        } else if (!isNaN(somaDosInputs)) {
            imprimeResultado.innerHTML = somaDosInputs
            imprimeResultado.style.backgroundColor = "#90EE90"

        }
        console.log("fim!")
    }
