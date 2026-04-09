<img src="/assets/teste.svg" width="100%">

# 📦 Projeto Semestral – Catálogo de Produtos Interativo

## 🎯 Objetivo

Desenvolver uma aplicação web front-end utilizando **HTML**, **CSS (Bootstrap)** e **JavaScript Vanilla**, com foco em manipulação de DOM, consumo de API e persistência de dados no navegador.

---

## 🧩 Descrição do Projeto

Você deverá construir um **catálogo de produtos online**, consumindo dados de uma API pública e permitindo que o usuário visualize, busque e favorite produtos.

A aplicação deve funcionar **totalmente no front-end**, sem uso de backend próprio.

---

## 🌐 Fonte de Dados

Utilize a seguinte API pública para obter os produtos:

https://dummyjson.com/products

---

## ⚙️ Funcionalidades Obrigatórias

### 1. Listagem de Produtos
- Exibir os produtos em formato de **cards**
- Mostrar ao menos:
  - Nome do produto
  - Preço
  - Imagem
  - Categoria

---

### 2. Busca/Filtro
- Implementar um campo de busca
- Filtrar produtos pelo nome (title)
- A filtragem deve ocorrer dinamicamente

---

### 3. Favoritar Produtos ⭐
- Permitir que o usuário favorite/desfavorite produtos
- Indicar visualmente quais produtos estão favoritados

---

### 4. Persistência com localStorage
- Os produtos favoritados devem ser salvos no `localStorage`
- Ao recarregar a página, os favoritos devem ser mantidos

---

### 5. Tela ou Seção de Favoritos
- Criar uma área que exiba apenas os produtos favoritados

---

## 🛠️ Requisitos Técnicos

- Utilizar apenas:
  - HTML
  - CSS (Bootstrap)
  - JavaScript Vanilla (sem frameworks)

- Utilizar:
  - `fetch()` para consumo da API
  - `getElementById` e/ou `querySelector` para manipulação do DOM
  - Arrays e objetos em JavaScript

---

## 📐 Organização do Projeto

Sugestão de estrutura:

~~~txt
/projeto
├── index.html
├── css/
├── js/
│ ├── app.js
│ ├── api.js
│ └── storage.js
~~~



---

## 💡 Dicas

- Crie funções como:
  - `renderProdutos()`
  - `renderFavoritos()`
  - `carregarProdutos()`

- Sempre que houver alteração nos dados, **re-renderize a interface**

- Utilize o Bootstrap para facilitar o layout

---

## 🚀 Possíveis Extensões (Futuro)

- Paginação de produtos
- Filtro por categoria
- Ordenação por preço
- Visualização detalhada do produto (modal)
- Carrinho de compras (bônus)

---

## 📅 Entrega

- Código-fonte completo
- Aplicação funcionando no navegador
- (Opcional) Publicação via GitHub Pages

---

## 🎓 Critérios de Avaliação

- Funcionamento correto das funcionalidades
- Organização do código
- Uso adequado de JavaScript
- Qualidade da interface (Bootstrap)
- Clareza e estrutura do projeto

---

## 📌 Observação

Este projeto poderá evoluir ao longo do semestre com novas funcionalidades.