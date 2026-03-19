<img src="/assets/teste.svg" width="100%">

# Aula 5 - 19/03/2026 - Frameworks CSS

--- 

# Bootstrap

[O Bootstrap](https://getbootstrap.com/) é um framework de código aberto que oferece um conjunto de ferramentas e componentes prontos (como grids, botões e modais) para criar rapidamente sites e aplicações web responsivas, ou seja, que se adaptam a diferentes tamanhos de ecrã, como desktop e mobile. Criado pelo Twitter, ele simplifica e acelera o desenvolvimento de interfaces de usuário (UI) ao fornecer estilos e layouts consistentes, permitindo que desenvolvedores se concentrem na funcionalidade em vez de escrever todo o código CSS e JavaScript manualmente.

### Principais características e funcionalidades:

**Componentes pré-construídos:** Oferece diversos componentes prontos para uso, como botões, formulários, alertas e modais, que podem ser personalizados. 

**Sistema de Grid responsivo:** Um sistema de grid flexível que permite criar layouts que se adaptam automaticamente a diferentes tamanhos de ecrã, garantindo a responsividade do site. 

**Abordagem "mobile-first":** O design é priorizado para dispositivos móveis, com o estilo sendo aprimorado para telas maiores, resultando em websites que são responsivos por padrão. 

**Baseado em HTML, CSS e JavaScript:** O framework utiliza estas três tecnologias para construir e estilizar interfaces, integrando também componentes interativos e utilitários com JavaScript. 

**Código aberto e gratuito:** O Bootstrap é gratuito e de código aberto, com uma grande comunidade de desenvolvedores contribuindo para o seu desenvolvimento e melhoria contínua. 

### Como usar o Bootstrap

Para usar o Bootstrap via CDN, visite o [site oficial do Bootstrap](https://getbootstrap.com/) e copie os links `<link>` do CSS e `<script>` do JavaScript fornecidos na seção de download. Cole essas tags nas secções `<head>` do seu arquivo HTML, respetivamente, para que a aplicação possa aceder aos estilos e funcionalidades do framework sem a necessidade de descarregar ficheiros. 

~~~html
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
~~~

---

# O que é o Tailwind CSS ?

[Tailwind CSS](https://tailwindcss.com/) é um framework CSS com uma abordagem "utility-first", que disponibiliza um conjunto de classes utilitárias pré-definidas para construir designs personalizados e responsivos diretamente no seu HTML. Em vez de escrever CSS em arquivos separados, você aplica essas classes diretamente na marcação para estilizar elementos, oferecendo alta flexibilidade e customização sem a necessidade de criar padrões de componentes pré-definidos como outros frameworks. 

### Como funciona

**Classes Utilitárias:** O Tailwind fornece pequenas classes de CSS que controlam uma única propriedade, como text-center para centralizar texto, bg-blue-500 para definir uma cor de fundo azul, ou flex para aplicar um display flex. 

**Construção em HTML:** Você combina essas classes diretamente no seu código HTML para criar a aparência desejada, como se estivesse montando um design com peças de Lego. 

**Personalização:** É possível customizar temas, como paletas de cores e escalas de espaçamento, e usar esses tokens de design para criar estilos personalizados. 

**Geração de CSS Estático:** O framework escaneia seus arquivos, gera os estilos correspondentes e os escreve em um arquivo CSS estático, o que o torna rápido e eficiente. 

### Vantagens

**Desenvolvimento rápido:** Permite construir interfaces rapidamente, testar e alterar estilos de forma ágil.

**Flexibilidade:** Oferece controle total para criar designs únicos, sem ficar preso a componentes pré-definidos.

**Manutenção facilitada:** Ao aplicar estilos diretamente no HTML, você evita a necessidade de criar e gerenciar múltiplos arquivos CSS, simplificando a manutenção. 

**Abordagem moderna:** Tira proveito dos recursos mais recentes do CSS para construir designs responsivos. 


### Como usar o Tailwind CSS (apenas Teste)


Para usar o Tailwind CSS via CDN, copie e cole o script da biblioteca dentro da tag `<head>` do seu arquivo HTML, acesse a documentação oficial do Tailwind CSS para encontrar o link do Play CDN, e então comece a aplicar as classes utilitárias do framework diretamente nos elementos HTML para estilizar sua página. 

~~~html
<script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
~~~

> AVISO: A inportação desta forma é apenas para uso em aula (teste).
