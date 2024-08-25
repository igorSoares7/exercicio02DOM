function imprimePares(){
    let imprimeResultado = document.getElementById("numerosPar")
    let pares = ''
    for (let i = 1; i < 100; i++){
        if(i % 2 == 0) {
        pares += `${i} \n`
        }
    }

    imprimeResultado.innerText = pares

    
}

function limpar(){
    let limpaTela = document.getElementById("numerosPar")
    limpaTela.innerHTML = 'Resultado...'
    

}