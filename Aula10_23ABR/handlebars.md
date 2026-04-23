
# Template Engine no Frontend com Handlebars.js

## 📌 Introdução

À medida que aplicações web crescem, manipular o HTML diretamente com JavaScript usando métodos como `innerHTML` e `getElementById` pode se tornar confuso, repetitivo e difícil de manter.

Uma solução para esse problema é o uso de **Template Engines**, que permitem separar a estrutura (HTML) da lógica (JavaScript).

Neste contexto, o **Handlebars.js** surge como uma ferramenta simples e poderosa para gerar HTML dinâmico a partir de dados.

---

## 🧠 O que é o Handlebars?

O **Handlebars.js** é uma biblioteca JavaScript que permite criar templates HTML dinâmicos de forma organizada.

Ele utiliza uma sintaxe baseada em **placeholders**, delimitados por chaves duplas:

> ```{{variavel}}```


Esses placeholders são substituídos por dados em tempo de execução.

---

## 🎯 Por que usar Handlebars?

Sem template engine:

- Código JavaScript misturado com HTML
- Uso excessivo de `innerHTML`
- Difícil manutenção
- Código menos legível

Com Handlebars:

- Separação clara entre HTML e lógica
- Código mais limpo e organizado
- Reutilização de templates
- Facilidade de manutenção

---

## ⚙️ Como usar o Handlebars

### 1. Importar a biblioteca

Via CDN:

~~~html
<script src="https://cdn.jsdelivr.net/npm/handlebars@latest/dist/handlebars.min.js"></script>
~~~

---

### 2. Criar um template

O template geralmente é definido dentro de uma `<script>` com tipo especial:

~~~html
<script id="meu-template" type="text/x-handlebars-template">
    <h1>{{titulo}}</h1>
    <p>{{descricao}}</p>
</script>
~~~

---

### 3. Compilar o template

~~~javascript
let source = document.getElementById("meu-template").innerHTML;
let template = Handlebars.compile(source);
~~~

---

### 4. Passar os dados

~~~javascript
let dados = {
    titulo: "Olá, mundo!",
    descricao: "Usando Handlebars.js"
};

let html = template(dados);
~~~

---

### 5. Renderizar na tela

~~~javascript
document.getElementById("resultado").innerHTML = html;
~~~

---

## 💡 Exemplo completo

### HTML

~~~html
<div id="resultado"></div>

<script id="template-produto" type="text/x-handlebars-template">
    <h2>{{nome}}</h2>
    <p>Preço: R$ {{preco}}</p>
</script>
~~~

---

### JavaScript

~~~javascript
let source = document.getElementById("template-produto").innerHTML;
let template = Handlebars.compile(source);

let produto = {
    nome: "Chocolate",
    preco: 5.99
};

let html = template(produto);

document.getElementById("resultado").innerHTML = html;
~~~

---

## 🔁 Trabalhando com listas (each)

O Handlebars permite iterar sobre arrays usando o bloco `each`.

### Template

~~~html
<script id="template-lista" type="text/x-handlebars-template">
    <ul>
        {{#each produtos}}
            <li>{{this}}</li>
        {{/each}}
    </ul>
</script>
~~~

---

### Dados

~~~javascript
let dados = {
    produtos: ["Chocolate", "Refrigerante", "Biscoito"]
};
~~~

---

## 🔀 Condicionais (if)

~~~html
{{#if disponivel}}
    <p>Produto disponível</p>
{{else}}
    <p>Produto indisponível</p>
{{/if}}
~~~

---

## 🧩 Acessando propriedades de objetos

~~~html
<p>{{usuario.nome}}</p>
<p>{{usuario.idade}}</p>
~~~

---

## 🔧 Helpers (funções auxiliares)

Handlebars permite criar funções personalizadas chamadas **helpers**.

### Exemplo:

~~~javascript
Handlebars.registerHelper("maiusculo", function(texto) {
    return texto.toUpperCase();
});
~~~

---

### Uso no template:

~~~html
<p>{{maiusculo nome}}</p>
~~~

---

## ⚠️ Boas práticas

- Evite lógica complexa dentro do template
- Use templates apenas para renderização
- Mantenha dados e apresentação separados
- Prefira helpers para pequenas transformações

---

## 🚫 Limitações

- Não substitui frameworks modernos (React, Vue, etc.)
- Pode ficar limitado em aplicações grandes
- Renderização manual (não reativa)

---

## 📊 Quando usar Handlebars?

Ideal para:

- Projetos com JavaScript puro (vanilla)
- Ensino de separação entre lógica e apresentação
- Aplicações simples sem framework
- Renderização de listas e dados dinâmicos

---

## 🚀 Conclusão

O Handlebars.js é uma excelente ferramenta para introduzir conceitos importantes como:

- Separação de responsabilidades
- Templates dinâmicos
- Organização de código

Ele ajuda a sair do uso direto de `innerHTML`, trazendo mais estrutura para aplicações JavaScript.

---

## 📚 Sugestões de exercícios

1. Criar um template para exibir um perfil de usuário
2. Criar uma lista de produtos usando `each`
3. Criar um sistema de favoritos utilizando LocalStorage + Handlebars
4. Criar um helper para formatar preços (R$)

