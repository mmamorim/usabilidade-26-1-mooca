<img src="/assets/teste.svg" width="100%">

# Aula 7 - 02/04/2026 - Entrada de Dados em JavaScript

# Entrada de Dados em JavaScript

Agora que já entendemos o conceito de **variáveis**, vamos dar o próximo passo: aprender como **receber dados do usuário** em JavaScript. Essa é uma etapa essencial, pois praticamente todo sistema precisa interagir com o usuário.

Nesta aula, veremos duas formas principais de entrada de dados:
- Usando `prompt()` (forma simples e rápida)
- Usando elementos HTML (forma utilizada em aplicações reais)

---

## 🧠 Entrada de dados com `prompt()`

O `prompt()` é uma função do JavaScript que exibe uma caixa de diálogo no navegador, permitindo que o usuário digite alguma informação.

~~~javascript
let nome = prompt("Digite seu nome:");
console.log(nome);
~~~

Nesse exemplo, uma caixa será exibida com a mensagem solicitando o nome. O valor digitado será armazenado na variável nome e depois exibido no console.

⚠️ Importante: o valor retornado pelo prompt() sempre será uma string (texto), mesmo que o usuário digite números.

---

### 🔄 Conversão de Tipos

Como o prompt() sempre retorna texto, muitas vezes precisamos converter esse valor para número, principalmente quando queremos realizar cálculos.

Para isso, utilizamos funções de conversão:

#### 🔢 parseInt() → número inteiro

~~~javascript
let idade = parseInt(prompt("Digite sua idade:"));
console.log(idade);
~~~

Essa função converte o valor para um número inteiro (sem casas decimais).

#### 🔢 parseFloat() → número decimal

~~~javascript
let altura = parseFloat(prompt("Digite sua altura:"));
console.log(altura);
~~~

Essa função converte o valor para um número com casas decimais.

⚠️ Atenção: se o valor digitado não for numérico, o JavaScript retorna NaN (Not a Number). Mais adiante veremos como validar essas entradas.

--- 

### 🌐 Entrada de dados com HTML

Em aplicações reais, não utilizamos prompt(). Em vez disso, usamos elementos da página HTML, como campos de entrada (input).

Exemplo:

<input type="text" id="nome">
<button onclick="capturar()">Enviar</button>

~~~html
<input type="text" id="nome">
<button onclick="capturar()">Enviar</button>
~~~

Nesse exemplo, temos uma caixa de texto e um botão que executa uma função JavaScript.

### 🔎 Mapeando elementos com id

O atributo id serve para identificar um elemento de forma única dentro da página.

~~~html
<input type="text" id="idade">
~~~

Aqui, o elemento possui o identificador "idade". Esse identificador será utilizado no JavaScript para acessar o elemento.


### 🧩 Capturando valores com document.getElementById

Para acessar um elemento HTML no JavaScript, utilizamos:

~~~js
document.getElementById("idDoElemento")
~~~

Exemplo prático:

~~~js
function capturar() {
    let nome = document.getElementById("nome").value;
    console.log(nome);
}
~~~

Nesse caso:

`document.getElementById("nome")` localiza o elemento 
`.value` captura o valor digitado pelo usuário

O valor é armazenado na variável `nome`


### 🔢 Convertendo valores de inputs

Assim como no prompt(), os valores capturados dos inputs também são strings. Portanto, se quisermos trabalhar com números, precisamos converter.

~~~js
function calcular() {
    let idade = parseInt(document.getElementById("idade").value);
    console.log(idade);
}
~~~

--- 

## 📤 Exibindo dados na página

Até agora vimos como **capturar dados do usuário**. Agora vamos aprender o caminho inverso: **como exibir dados na tela usando JavaScript**.

---

### 🧩 Exibindo dados em caixas de texto (`.value`)

Quando queremos alterar o conteúdo de um campo de entrada (`input`), utilizamos a propriedade `.value`.

~~~html
<input type="text" id="nome">
<button onclick="preencher()">Preencher</button>
~~~

✔ Nesse caso:

Localizamos o input pelo id
Atribuímos um valor usando .value
O texto aparece dentro da caixa de texto

👉 Use .value sempre que estiver trabalhando com inputs, textareas ou campos de formulário


### 🏷️ Exibindo dados em elementos HTML (.innerText)

Quando queremos exibir informações em elementos como <p>, <div>, <span>, usamos .innerText.

~~~html
<p id="mensagem"></p>
<button onclick="mostrar()">Mostrar mensagem</button>
~~~

~~~js
function mostrar() {
    document.getElementById("mensagem").innerText = "Olá, mundo!";
}
~~~

✔ Nesse caso:

O conteúdo do elemento é substituído pelo texto informado
O texto aparece diretamente na página

👉 Use .innerText para exibir textos em elementos HTML comuns

### 🔍 Diferença entre .value e .innerText
.value → usado para campos de entrada (input)
.innerText → usado para elementos de exibição (p, div, span, etc.)

### 💡 Dica

Uma prática comum é:

Capturar um valor de um input (.value)
Processar esse valor
Exibir o resultado em um elemento usando .innerText

Isso permite criar interfaces interativas simples.

---

## ✅ Resumo
prompt() → forma simples de entrada de dados (retorna string)
parseInt() → converte para número inteiro
parseFloat() → converte para número decimal
id → identifica elementos HTML
document.getElementById() → acessa elementos da página
.value → obtém o valor digitado pelo usuário