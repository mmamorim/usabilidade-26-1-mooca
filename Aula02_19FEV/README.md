<img src="/assets/teste.svg" width="100%">

# Aula 2 - 22/08/2025 - HTML

--- 

## O que é HTML?
HTML (HyperText Markup Language) é a linguagem padrão para criar páginas da web.  
Define a **estrutura do conteúdo**, utilizando elementos chamados **tags** para organizar textos, imagens, links, vídeos e outros recursos.

--- 

# O que é uma Tag em HTML?

Uma **tag** é um **marcador que estrutura o conteúdo da página**.  
É escrita entre sinais de **menor (`<`) e maior (`>`)**.

## Exemplo básico
~~~html
<p>Olá, mundo!</p>
~~~
- **Tag de abertura:** `<p>`
- **Conteúdo:** `Olá, mundo!`
- **Tag de fechamento:** `</p>`



As tags normalmente vêm em pares (abertura e fechamento), mas algumas são autofechadas, como:

~~~html
<img src="imagem.jpg" alt="Descrição"/>
~~~

---

## Características Importantes
- **Tags podem ser aninhadas**, mas devem ser bem fechadas.
- O HTML por si só **não estiliza nem adiciona lógica**: usa-se **CSS** (estilo) e **JavaScript** (interatividade) para isso.
- É **interpretado pelo navegador**, não compilado.

---

## Estrutura Básica
Um documento HTML começa com a declaração `<!DOCTYPE html>` e os elementos principais:

- `<html>`: raiz do documento
- `<head>`: contém metadados, título (`<title>`), links para estilos e scripts
- `<body>`: contém o conteúdo visível (textos, imagens, tabelas, formulários)


~~~html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Título da Página</title>
</head>
<body>
    <h1>Olá, mundo!</h1>
    <p>Este é o conteúdo inicial da página.</p>
</body>
</html>
~~~

# Explicação dos Metadados HTML

## 1. `<meta charset="UTF-8">`
- Define o **conjunto de caracteres** da página.
- `UTF-8` suporta acentos, emojis e a maioria dos caracteres usados mundialmente.
- Garante que textos apareçam corretamente em diferentes idiomas.

## 2. `<meta name="viewport" content="width=device-width, initial-scale=1.0">`
- Controla a **visualização em dispositivos móveis**.
- **`width=device-width`**: ajusta a largura para o tamanho da tela do dispositivo.
- **`initial-scale=1.0`**: define o nível de zoom inicial (1 = 100%).

> Sem essa meta tag, a página pode parecer **esticada ou muito pequena em celulares**.

---

## Principais Elementos
- **Texto**: `<h1>` a `<h6>` (títulos), `<p>` (parágrafos), `<strong>` (negrito), `<em>` (itálico)
- **Links e Imagens**: `<a href="...">` (links), `<img src="..." alt="...">` (imagens)
- **Listas**: `<ul>` (não ordenada), `<ol>` (ordenada), `<li>` (item)
- **Tabelas**: `<table>`, `<tr>` (linha), `<td>` (célula), `<th>` (cabeçalho)
- **Formulários**: `<form>`, `<input>`, `<textarea>`, `<button>`, `<select>`

---

# Atributos em HTML

Os **atributos** fornecem **informações adicionais** ou **modificam o comportamento** de uma tag HTML.

- São sempre escritos dentro da **tag de abertura**.
- Seguem o formato: `nome="valor"`.

## Exemplos comuns

~~~html
<a href="https://www.exemplo.com">Link</a>
<img src="imagem.jpg" alt="Descrição da imagem">
<input type="text" placeholder="Digite aqui">
~~~

---

# Elementos Block e Inline no HTML

Os elementos em HTML podem ser classificados em **block** ou **inline**, dependendo de como ocupam espaço na página.

## Elementos Block
- Ocupam **toda a largura disponível** do contêiner pai.
- Sempre **começam em uma nova linha**.
- São usados para **estruturar seções e blocos de conteúdo**.
- **Exemplos:** `<div>`, `<p>`, `<h1>`, `<section>`

~~~html
<p>Este é um parágrafo (block).</p>
<p>Outro parágrafo (block).</p>
~~~

## Elementos Inline

Ocupam apenas o espaço necessário para o conteúdo.
Não quebram a linha automaticamente.
São usados para formatar partes do conteúdo dentro de blocos.

Exemplos: `<span>`, `<a>`, `<strong>`, `<em>`

---

# Principais Tags HTML e Classificação

| Tag           | Tipo   | Função / Descrição                              |
|---------------|--------|------------------------------------------------|
| **Estrutura / Semântica** | | |
| `<html>`      | Block  | Raiz do documento HTML                          |
| `<head>`      | Block  | Contém metadados, links, scripts               |
| `<body>`      | Block  | Contém o conteúdo visível da página           |
| `<header>`    | Block  | Cabeçalho de página ou seção                   |
| `<footer>`    | Block  | Rodapé de página ou seção                      |
| `<main>`      | Block  | Conteúdo principal da página                   |
| `<section>`   | Block  | Seção de conteúdo                               |
| `<article>`   | Block  | Artigo independente                             |
| `<nav>`       | Block  | Menu de navegação                               |
| `<aside>`     | Block  | Conteúdo complementar / barra lateral         |
| `<div>`       | Block  | Contêiner genérico                              |
| **Textos / Títulos** | | |
| `<h1>`-`<h6>` | Block  | Títulos de diferentes níveis                  |
| `<p>`         | Block  | Parágrafo                                      |
| `<blockquote>`| Block  | Citação em bloco                                |
| `<pre>`       | Block  | Texto pré-formatado                             |
| `<span>`      | Inline | Elemento genérico em linha                      |
| `<strong>`    | Inline | Texto em negrito                                |
| `<em>`        | Inline | Texto em itálico                                |
| `<small>`     | Inline | Texto pequeno                                   |
| `<mark>`      | Inline | Texto destacado                                 |
| `<code>`      | Inline | Trecho de código                                 |
| **Listas**    | | |
| `<ul>`        | Block  | Lista não ordenada                              |
| `<ol>`        | Block  | Lista ordenada                                  |
| `<li>`        | Block  | Item de lista                                   |
| **Links / Mídia** | | |
| `<a>`         | Inline | Link                                           |
| `<img>`       | Inline | Imagem                                         |
| `<video>`     | Block  | Vídeo incorporado                               |
| `<audio>`     | Block  | Áudio incorporado                               |
| `<iframe>`    | Block  | Conteúdo externo incorporado                    |
| **Formulários / Interação** | | |
| `<form>`      | Block  | Formulário                                      |
| `<input>`     | Inline | Campo de entrada                                |
| `<textarea>`  | Block  | Área de texto                                  |
| `<button>`    | Inline | Botão                                          |
| `<select>`    | Inline | Lista suspensa                                 |
| `<label>`     | Inline | Rótulo para campos de formulário               |


## Tags Genéricas

* `div`: elemento Block
* `span`: elemento Inline


### Referências:

##### HTML:

* [w3schools HTML](https://www.w3schools.com/html/) 
* [Mozilla MDN HTML](https://developer.mozilla.org/pt-BR/docs/Web/HTML) 

##### CSS:

* [w3schools CSS](https://www.w3schools.com/css/) 
* [Mozilla MDN CSS](https://developer.mozilla.org/pt-BR/docs/Web/CSS) 



