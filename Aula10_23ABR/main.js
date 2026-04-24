
console.log("oi gente")

let elemSpan = document.getElementById("contador")
let valor = localStorage.getItem("contador")
elemSpan.innerText = valor

function incrementar() {
    valor++
    localStorage.setItem("contador", valor);
    let elemSpan = document.getElementById("contador")
    elemSpan.innerText = valor
}

let source = `
    {{#each frutas}} 
        oi {{this}} ... {{saudacao}}! Tudo bem com vc?  
    {{/each}}`

let template = Handlebars.compile(source);
let dados = {
    nome: "Bia",
    saudacao: "Boa tarde!",
    frutas: ["🍉", "🍇", "Ana", "Bia"]
};

let saida = template(dados);
console.log(saida);

let elem = document.getElementById("listaPessoas");
let tplTrecho = Handlebars.compile(`
        <div style="font-weight: 900;">{{titulo}}</div>
        {{#each pessoas}} 
            <div>{{this.nome}} tem {{this.idade}} anos</div>
        {{/each}}
`)
let dados2 = {
    titulo: "Lista de pessoas",
    pessoas: [
        { nome: "Ana", idade: 18 },
        { nome: "Bia", idade: 23 },
        { nome: "João", idade: 28 },
    ]
}
elem.innerHTML = tplTrecho(dados2)

let listaFrutas = {
    frutas: []
}
let listaFrutasSalvo = localStorage.getItem("listaFrutas")
if(listaFrutasSalvo != null) {
    listaFrutas = JSON.parse(listaFrutasSalvo)
}

renderizarFrutas()

function acaoAdicionar() {
    let avatar = document.getElementById("avatar").value
    let nome = document.getElementById("nome").value
    let cor = document.getElementById("cor").value

    let fruta = {}
    fruta.avatar = avatar
    fruta.nome = nome
    fruta.cor = cor
    console.log(fruta)
    listaFrutas.frutas.push(fruta)
    localStorage.setItem("listaFrutas",JSON.stringify(listaFrutas))
    renderizarFrutas()
}

function renderizarFrutas() {
    let elem = document.getElementById("lista")
    let htmlString = `
        <tr>
            <td>Avatar</td>
            <td>Nome</td>
            <td>Cor</td>
        </tr>
        {{#each frutas}} 
            <tr>
                <td>{{this.avatar}}</td>
                <td>{{this.nome}}</td>
                <td>{{this.cor}}</td>
            </tr>    
        {{/each}}
    `
    let tplTrecho = Handlebars.compile(htmlString)
    elem.innerHTML = tplTrecho(listaFrutas)
}