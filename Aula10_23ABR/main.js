
console.log("oi gente")

let source = `
    {{#each frutas}} 
        oi {{this}} ... {{saudacao}}! Tudo bem com vc?  
    {{/each}}`

let template = Handlebars.compile(source);
let dados = {
    nome: "Bia",
    saudacao: "Boa tarde!",
    frutas: [ "🍉", "🍇", "Ana", "Bia" ]
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

let listaFrutas = [
    { avatar: "🍉", nome: "Melancia", cor: "vermelha" },
    { avatar: "🍇", nome: "Uva", cor: "roxa" },
    { avatar: "🍇", nome: "Uva2", cor: "roxa" },
    { avatar: "🍇", nome: "Uva3", cor: "roxa" },
]

for (let i in listaFrutas) {
    insereLinha(listaFrutas[i])
}

function acaoAdicionar() {
    let avatar = document.getElementById("avatar").value
    let nome = document.getElementById("nome").value
    let cor = document.getElementById("cor").value

    let fruta = {}
    fruta.avatar = avatar
    fruta.nome = nome
    fruta.cor = cor
    console.log(fruta)
    insereLinha(fruta)
    //console.log("Avatar", avatar)
    //console.log("Nome", nome)
    //console.log("Cor", cor)

}

function insereLinha(fruta) {
    let elem = document.getElementById("lista")
    let htmlString = `
        <tr>
            <td>`+ fruta.avatar + `</td>
            <td>`+ fruta.nome + `</td>
            <td>`+ fruta.cor + `</td>
        </tr>    
    `
    elem.insertAdjacentHTML('beforeend', htmlString)
}