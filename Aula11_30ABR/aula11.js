
console.log("oi aula11 !!!");



//console.log(fazAlgo)



function tchau(alguem) {
    console.log("Até log " + alguem + " nos vemos em breve!");
}

function encontro(alguem, fulano) {
    //bomdia(fulano)
    tchau(alguem)
}

function criaSobrenome() {
    let valor = parseInt(Math.random() * 10) % 2
    let sobrenome = "Alface"
    if (valor == 0) {
        sobrenome = "Beterraba"
    }
    return sobrenome
}

function fazAlgo(valor) {
    console.log("==================")
    //console.log(valor)
    valor("Ana", "Bia")
    console.log("executei faz algo")
    console.log("==================")
}

let nome1 = "Ana " + criaSobrenome()
let nome2 = "Bia " + criaSobrenome()

fazAlgo((alguem) => {
    console.log("Bom dia " + alguem + " tudo bem com vc?");
})

//encontro(nome1,nome2)

let contador = 1
function funcao1() {
    contador++
    let elem = document.getElementById("contador")
    elem.innerHTML = contador
    console.log("Valor contador",contador);
}

setInterval(funcao1,1000)

console.log("Muito legal");
