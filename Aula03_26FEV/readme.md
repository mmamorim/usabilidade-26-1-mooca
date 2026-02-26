<img src="/assets/teste.svg" width="100%">

# Aula 3 - 26/02/2026 - CSS

--- 

# **Introdução ao CSS (Cascading Style Sheets)**

## **O que é CSS?**
CSS é a linguagem utilizada para **definir o estilo visual** de páginas web. Com ele, controlamos **cores, tamanhos, fontes, espaçamentos, posicionamentos e layouts**, tornando as páginas HTML mais atraentes e organizadas.

---

## **Como o CSS funciona?**
O CSS atua selecionando elementos HTML e aplicando **regras de estilo** a eles. Cada regra é composta por:
- **Seletor:** indica qual elemento será estilizado.
- **Propriedade:** define a característica a ser alterada.
- **Valor:** especifica o ajuste desejado.

### Exemplo
~~~css
p {
  color: blue;
  font-size: 16px;
}
~~~

## Formas de aplicar CSS

O CSS pode ser aplicado de três maneiras principais, cada uma com seu propósito e boas práticas:

* **Inline:** dentro do elemento ```<p style="color:red;">```
* **Interno:** dentro da tag ```<style>``` no HTML.
* **Externo:** arquivo ```.css``` separado, vinculado via ```<link>``` (mais recomendado).

---

#### CSS Inline (em linha)

A forma **inline** aplica o CSS diretamente dentro do elemento HTML, utilizando o atributo `style`.  
Cada propriedade de estilo é escrita no formato `propriedade: valor;` e aplicada apenas àquele elemento específico.

##### Características
- **Escopo restrito:** afeta apenas o elemento onde foi aplicado.
- **Alta prioridade:** sobrescreve regras internas e externas se houver conflito (exceto quando há `!important`).
- **Baixa reutilização:** não pode ser reaproveitado para outros elementos.

##### Quando usar?
- Ajustes rápidos ou testes temporários.
- Pequenos projetos que não exigem manutenção complexa.
- Situações em que o estilo será aplicado a um único elemento de forma única.

##### Exemplo de uso
~~~html
<p style="color: red; font-size: 18px; margin: 10px;">
  Este texto ficará vermelho, com tamanho 18px e margem de 10px.
</p>
~~~

---

#### CSS Interno (no mesmo arquivo HTML)

O CSS interno é definido dentro da tag `<style>` no **cabeçalho do arquivo HTML**.  
As regras CSS ficam centralizadas no próprio documento, mas **não em um arquivo separado**, permitindo aplicar estilos a vários elementos da página.

##### Características
- **Escopo da página:** afeta todos os elementos da página onde está inserido.
- **Mais organizado que inline:** permite agrupar estilos em um único local dentro do HTML.
- **Não reutilizável em outras páginas:** o estilo só vale para aquele arquivo específico.

##### Quando usar?
- Páginas únicas ou testes rápidos.
- Projetos pequenos onde não há necessidade de um arquivo CSS externo.
- Quando queremos centralizar todos os estilos em um único documento HTML.

##### Exemplo de uso
~~~html
<!DOCTYPE html>
<html>
<head>
  <style>
    body {
      background-color: #f0f0f0;
      font-family: Arial, sans-serif;
    }

    p {
      color: green;
      font-size: 16px;
    }
  </style>
</head>
<body>
  <p>Este texto será verde e a página terá fundo cinza claro.</p>
</body>
</html>
~~~

---

### CSS Externo (arquivo separado)

O CSS externo é escrito em um **arquivo próprio** com extensão `.css` e vinculado ao HTML usando a tag `<link>` dentro do `<head>`.  
Esta é a **forma mais recomendada** para projetos maiores, pois mantém a separação entre conteúdo (HTML) e estilo (CSS).

##### Características
- **Escopo global:** pode ser aplicado a várias páginas que utilizem o mesmo arquivo CSS.
- **Organização:** mantém o código HTML limpo e o CSS centralizado em um arquivo separado.
- **Reutilização:** permite reaproveitar o mesmo estilo em múltiplas páginas.

##### Quando usar?
- Projetos grandes ou médios com múltiplas páginas.
- Quando se deseja manter uma manutenção fácil e organizada do CSS.
- Quando estilos precisam ser reaplicados em diferentes documentos HTML.

##### Exemplo de uso

**Arquivo CSS (`style.css`):**
~~~css
body {
  background-color: #f0f0f0;
  font-family: Arial, sans-serif;
}

p {
  color: blue;
  font-size: 16px;
}
~~~

**Arquivo HTML:**
~~~html
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <p>Este texto ficará azul e a página terá fundo cinza claro.</p>
</body>
</html>
~~~

---

## Seletores CSS

Os seletores definem **quais elementos HTML** receberão estilos. Eles permitem aplicar regras de forma específica ou geral.

### Tipos de seletores

1. **Seletor de elemento**  
Aplica o estilo a todos os elementos de um tipo.
~~~css
p {
  color: blue;
}
~~~

2. **Seletor de classe**
Aplica o estilo a todos os elementos que possuem uma determinada classe.
~~~css
.titulo {
  font-size: 24px;
}
~~~

2. **Seletor de ID**
Aplica o estilo a um único elemento com ID específico.
~~~css
#menu {
  background-color: gray;
}
~~~

2. **Seletor Universal**
Aplica o estilo a todos os elementos da página.
~~~css
* {
  margin: 0;
  padding: 0;
}
~~~

2. **Seletores de grupo**
Permite aplicar o mesmo estilo a vários elementos de uma vez.
~~~css
h1, h2, h3 {
  font-family: Arial, sans-serif;
}
~~~

2. **Seletores de descendente**
Aplica o estilo a elementos dentro de um determinado elemento pai.
~~~css
div p {
  color: green;
}
~~~

---

## Propriedades e Valores no CSS

No CSS, cada regra é formada por **propriedade** e **valor**, definindo exatamente **como o elemento deve ser estilizado**.

### Conceitos

- **Propriedade:** indica o aspecto do elemento que será alterado.  
  Exemplos: `color`, `font-size`, `margin`, `padding`, `background-color`.

- **Valor:** especifica o ajuste da propriedade.  
  Exemplos: `red`, `16px`, `10%`, `#333`.

### Sintaxe básica
~~~css
seletor {
  propriedade: valor;
}
~~~
**Exemplo**
~~~css
p {
  color: red;          /* Define a cor do texto */
  font-size: 18px;     /* Define o tamanho da fonte */
  margin: 10px;        /* Define a margem ao redor do parágrafo */
  padding: 5px;        /* Define o espaçamento interno */
}
~~~

> Uma regra CSS pode conter múltiplas propriedades, separadas por ponto e vírgula.
> O CSS é case-insensitive em propriedades e valores de palavras-chave (red e Red funcionam), mas valores numéricos e unidades devem ser precisos (16px ≠ 16PX).

---

## Box Model (Modelo de Caixa)

No CSS, todo elemento HTML é tratado como uma **caixa**, composta por quatro áreas que determinam o espaço e a aparência do elemento.

### Estrutura do Box Model

1. **Content (Conteúdo)**  
   Área onde o conteúdo real do elemento é exibido, como texto, imagem ou vídeo.

2. **Padding (Preenchimento)**  
   Espaço interno entre o conteúdo e a borda do elemento.  
   Exemplo:
   ~~~css
   padding: 10px;
   ~~~

## Border (Borda) e Margin (Margem) no CSS

No Box Model, além do conteúdo e do padding, dois elementos fundamentais definem o espaço e a separação dos elementos: **border** e **margin**.

---

### Border (Borda)
A **borda** envolve o conteúdo e o padding do elemento.  
Pode ter diferentes **larguras, estilos e cores**.

#### Sintaxe
~~~css
elemento {
  border-width: 2px;       /* Largura da borda */
  border-style: solid;     /* Estilo: solid, dashed, dotted, etc. */
  border-color: black;     /* Cor da borda */
}
~~~

## Margin (Margem) no CSS

A **margem** é o **espaço externo** que separa um elemento de outros elementos ao seu redor.  
Ela faz parte do **Box Model** e não possui cor, sendo sempre transparente.

### Sintaxe
A margem pode ser definida para cada lado individualmente ou de forma abreviada:

~~~css
/* Definindo individualmente */
elemento {
  margin-top: 10px;
  margin-right: 15px;
  margin-bottom: 10px;
  margin-left: 15px;
}

/* Forma abreviada: top, right, bottom, left */
elemento {
  margin: 10px 15px 10px 15px;
}

/* Forma abreviada simplificada */
elemento {
  margin: 20px; /* aplica a mesma margem em todos os lados */
}
~~~