let vendedores = require("./mockup.vendedores.js")

const cadastrar = (matricula, nome, salario, comissao) => {
    let vendedor = {
        matricula,
        nome,
        salario,
        comissao
    }

    vendedores.push(vendedor)
}

const listar = () => {
    vendedores.forEach((vendedor, indice) => {
        console.log(indice, vendedor)
    })
}

const buscar = (busca) => {
    let resultado = []

    vendedores.forEach((vendedor) => {
        if (JSON.stringify(vendedor).toLowerCase().includes(busca.toLowerCase())) {
            resultado.push(vendedor)
        }
    })

    console.log(resultado)
}

const buscarPorMatricula = (matricula) => {
    let resultado = []

    vendedores.forEach((vendedor) => {
        if (vendedor.matricula == matricula) {
            resultado.push(vendedor)
        }
    })

    console.log(resultado)
}

const buscarPorNome = (nome) => {
    let resultado = []

    vendedores.forEach((vendedor) => {
        if (vendedor.nome.toLowerCase().includes(nome.toLowerCase())) {
            resultado.push(vendedor)
        }
    })

    console.log(resultado)
}

const excluirPorMatricula = (matricula) => {
    let indice = -1

    vendedores.forEach((vendedor, i) => {
        if (vendedor.matricula == matricula) {
            indice = i
        }
    })

    if (indice != -1) {
        vendedores.splice(indice, 1)
        console.log("Vendedor excluído com sucesso!")
    } else {
        console.log("Vendedor não encontrado!")
    }
}


// testes

console.log("cadastrar")
cadastrar(5, "Luísa", 4000, 0.15)

console.log("listar")
listar()

console.log("buscar geral")
buscar("4000")

console.log("buscar por matrícula")
buscarPorMatricula(5)

console.log("buscar por nome")
buscarPorNome("Luísa")

console.log("excluir por matrícula")
excluirPorMatricula(5)

console.log("listar após a exclusão")
listar()