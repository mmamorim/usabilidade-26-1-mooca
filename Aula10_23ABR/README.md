<img src="/assets/teste.svg" width="100%">

# Aula 10 - 23/04/2026

# Persistência de Dados no Navegador com LocalStorage

## 📌 Introdução

Em aplicações web modernas, muitas vezes precisamos armazenar dados no navegador do usuário para manter informações mesmo após o recarregamento da página. Esse tipo de armazenamento é chamado de **persistência de dados no cliente**.

Uma das formas mais simples de fazer isso em JavaScript é utilizando a API **LocalStorage**, que faz parte do objeto `window`.

O LocalStorage permite armazenar dados no formato **chave-valor**, de maneira persistente, ou seja, os dados continuam disponíveis mesmo após fechar o navegador.

---

## 🧠 O que é o LocalStorage?

O **LocalStorage** é um mecanismo de armazenamento local que:

- Armazena dados no navegador
- Não possui data de expiração automática
- Persiste mesmo após fechar a aba ou navegador
- Armazena apenas **strings**

Ele faz parte da API Web Storage e pode ser acessado diretamente em JavaScript.

---

## ⚙️ Estrutura básica

O LocalStorage funciona com pares de chave e valor:

> chave → valor

Exemplo:

> "nome" → "Marcelo"


---

## ✍️ Salvando dados (setItem)

Para armazenar um valor, utilizamos o método `setItem`:

~~~javascript
localStorage.setItem("nome", "Marcelo");
~~~

Neste caso:
- `"nome"` é a chave
- `"Marcelo"` é o valor armazenado

---

## 🔎 Recuperando dados (getItem)

Para recuperar um valor salvo:

~~~javascript
let nome = localStorage.getItem("nome");
console.log(nome);
~~~

Se a chave não existir, o retorno será `null`.

---

## ❌ Removendo dados

### Remover um item específico:
~~~javascript
localStorage.removeItem("nome");
~~~

### Limpar todo o armazenamento:
~~~javascript
localStorage.clear();
~~~

⚠️ Atenção: `clear()` remove **todos os dados** do LocalStorage.

---

## 🔄 Trabalhando com tipos de dados

O LocalStorage armazena **apenas strings**. Portanto, quando precisamos trabalhar com objetos ou arrays, devemos converter os dados.

### 📤 Convertendo para string (JSON.stringify)

~~~javascript
let usuario = {
    nome: "Marcelo",
    idade: 40
};

localStorage.setItem("usuario", JSON.stringify(usuario));
~~~

---

### 📥 Convertendo de volta para objeto (JSON.parse)

~~~javascript
let usuarioRecuperado = JSON.parse(localStorage.getItem("usuario"));

console.log(usuarioRecuperado.nome);
~~~

---

## 💡 Exemplo prático: Salvando nome do usuário

### HTML

~~~html
<input type="text" id="nome">
<button onclick="salvar()">Salvar</button>
<button onclick="carregar()">Carregar</button>

<p id="resultado"></p>
~~~

---

### JavaScript

~~~javascript
function salvar() {
    let nome = document.getElementById("nome").value;
    localStorage.setItem("nome", nome);
}

function carregar() {
    let nome = localStorage.getItem("nome");
    document.getElementById("resultado").innerText = nome;
}
~~~

---

## 🧪 Exemplo prático: Lista de itens

### Objetivo:
Salvar uma lista de produtos no LocalStorage.

~~~javascript
function adicionarProduto() {
    let produto = document.getElementById("produto").value;

    let lista = JSON.parse(localStorage.getItem("produtos")) || [];

    lista.push(produto);

    localStorage.setItem("produtos", JSON.stringify(lista));
}
~~~

---

## 📊 Quando usar LocalStorage?

O LocalStorage é ideal para:

- Preferências do usuário (tema, idioma)
- Carrinho de compras simples
- Dados temporários de interface
- Aplicações pequenas sem backend

---

## ⚠️ Limitações

Apesar de útil, o LocalStorage possui limitações:

- Armazena apenas strings
- Limite de espaço (~5MB por domínio)
- Não é seguro para dados sensíveis
- Não possui suporte a consultas (como banco de dados)

---

## 🔐 Segurança

Nunca armazene:

- Senhas
- Tokens sensíveis
- Dados pessoais críticos

O LocalStorage pode ser acessado via JavaScript e não é protegido contra ataques como XSS.

---

## 🧩 Comparação rápida

| Recurso        | LocalStorage | SessionStorage |
|----------------|------------|---------------|
| Persistência   | Permanente | Até fechar aba |
| Capacidade     | ~5MB       | ~5MB          |
| Escopo         | Domínio    | Aba           |

---

## 🚀 Conclusão

O LocalStorage é uma ferramenta simples e poderosa para persistência de dados no navegador. Ele permite criar aplicações mais dinâmicas e interativas sem necessidade imediata de um backend.

Entretanto, deve ser usado com consciência de suas limitações, principalmente em relação à segurança e ao tipo de dados armazenados.

---

## 📚 Sugestão de exercícios

1. Criar um sistema que salva e exibe uma lista de tarefas (To-Do List)
2. Criar um sistema de favoritos (ex: produtos favoritos)
3. Criar um formulário que salva automaticamente os dados digitados
4. Criar um carrinho de compras simples usando LocalStorage

