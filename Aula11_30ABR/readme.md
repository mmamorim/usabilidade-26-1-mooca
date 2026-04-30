<img src="/assets/teste.svg" width="100%">

# Aula 11 - 30/04/2026

# O que são funções que devolvem objetos?

~~~js
let user = newUser('Ana', 20)
~~~

Isso lembra um método construtor?

# Funções anônimas

Funções também podem ser criadas por uma expressão de função sem indicar um identificador. Essa função é conhecida como uma **'função anônima'**. Neste caso, a função pode ser armazenada em uma variável ou ser passada como parâmetro para outra função.

~~~js
let raizQuadrada = function (numero) {
  return numero * numero;
};
let x = raizQuadrada(4); //x recebe o valor 16
~~~

Passando a função para outra função

~~~js
function raizCubica(f, numero) {
  return f(numero) * numero;
};
let x = raizCubica(raizQuadrada, 3); //x recebe o valor 27
~~~

# Arrow functions 

As **arrow functions** foram introduzidas no ES6 como uma maneira mais curta e simples de escrever funções. Elas eliminam a necessidade da palavra-chave ```function``` e têm uma sintaxe mais enxuta:

~~~js
const raizQuadrada = (numero) => numero * numero;
~~~

ou

~~~js
const fatorial = (num) => {
  let fat = 1
  for(let i=1; i<=num; i++) {
    fat = fat * i
  }
  return fat
}
~~~

# Funções Callback

As funções de **callback** em JavaScript são funções passadas como argumentos para outras funções. Elas são executadas após a conclusão de uma operação, permitindo um fluxo de trabalho assíncrono. Isso é crucial em operações que dependem de tempo, como solicitações de rede ou eventos de usuário.

## Fetch

https://developer.mozilla.org/pt-BR/docs/Web/API/Fetch_API/Using_Fetch

> https://geek-jokes.sameerkumar.website/api?format=json

## SetInterval e SetTimeout

* SetInterval: chama uma função a cada período de tempo https://www.w3schools.com/jsref/met_win_setinterval.asp
* SetTimeout: chama uma função uma vez após um período de tempo https://www.w3schools.com/jsref/met_win_settimeout.asp


~~~html
<div>
    <div class='flex items-center gap-3 m-1 p-1 bg-indigo-200 rounded'>
        <h2 class=''>
            Aula Teste
        </h2>
        <button onclick="" class='px-1 border-0 rounded bg-sky-600 hover:bg-sky-700 text-lg text-white'>
            <span>AddUser</span>
        </button>
    </div>
    <div class='mx-auto max-w-300 grid grid-cols-4 gap-2 p-2'>

    </div>
</div>
~~~

~~~html
<div className="border rounded bg-white p-1">
    <div class="rounded-t-lg h-22 overflow-hidden">
        <img className="object-cover object-top w-full" src={user.coverUrl} alt='' />
    </div>
    <div class="mx-auto w-22 h-22 relative -mt-16 border-4 border-white rounded-full overflow-hidden">
        <img class="object-cover object-center h-22" src={user.picture.large} alt='Woman looking front' />
    </div>
    <div class="text-center mt-2">
        <h2 class="m-0 font-semibold">
            { fullName }
        </h2>
        <p class="m-0 text-gray-500">
            { user.email }
        </p>
    </div>
    <div class="mt-2">
        <button class="w-1/3 block mx-auto rounded-lg bg-sky-700 border-0 text-white px-6 py-2">
            Follow
        </button>
    </div>
</div>
~~~

~~~js
    let response = await fetch('https://randomuser.me/api')
    console.log("response", response);
    let data = await response.json()
    console.log("data", data);
    let user = data.results[0]
    console.log("user", user);
~~~