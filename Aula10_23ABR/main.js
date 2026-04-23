
console.log("oi gente")

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