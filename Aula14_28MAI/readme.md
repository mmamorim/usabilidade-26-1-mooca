<img src="/assets/teste.svg" width="100%">

# Aula 14 - 28/05/2026

# Exemplo modelo para projeto A3

#### Recursos usados neste projeto

* API: https://randomuser.me/
* Handlebars: Copiar arquivo ´´´handlebars.min.js´´´
* Icones: Iconify
    * Linha a ser incluida ao Head do HTML
~~~html 
<script src="https://code.iconify.design/iconify-icon/3.0.2/iconify-icon.min.js"></script> 
~~~
    * Lista de Icones: https://icones.js.org/collection/all
* Bootstrap:
    * Linha a ser incluida ao Head do HTML
~~~html 
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-sRIl4kxILFvY47J16cr9ZwB07vP4J8+LH7qKQnuqkuIAvNWLzeN8tE5YBujZqJLB" crossorigin="anonymous">
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js" integrity="sha384-FKyoEForCGlyvwx9Hj09JcYn3nv7wiPVlz7YYwJrWVcXK/BmnVDxM+D2scQbITxI" crossorigin="anonymous"></script> 
~~~

---

## Exemplo Navbar

~~~html
<nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
        <iconify-icon icon="lucide:users" class="fs-2 me-1"></iconify-icon>
        <span class="navbar-brand">Catálogo de Amigos</span>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
            aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <div class="d-flex" role="search">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button class="btn btn-outline-success">Search</button>
            </div>
        </div>
    </div>
</nav>
~~~

---
