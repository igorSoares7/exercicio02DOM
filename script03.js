function execNomeCompleto() {
    let nomeEsobrenome = document.getElementById("resultado")

    let pessoa = {}
    pessoa.nome = document.getElementById("nome").value
    pessoa.sobrenome = document.getElementById("sobrenome").value
    pessoa.idade = document.getElementById("idade").value
    
    pessoa.concatenarNomes = () => {
        nomeEsobrenome.innerHTML = `${pessoa.nome} ${pessoa.sobrenome}`
    }

    let imprimeNomeCompleto = pessoa.concatenarNomes()
    imprimeNomeCompleto()
}

