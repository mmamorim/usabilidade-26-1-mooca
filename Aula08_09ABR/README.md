<img src="/assets/teste.svg" width="100%">

# Aula 8 - 09/04/2026

# Desvios Condicionais

antes...Como representar expressões lógicas?

## Operadores Relacionais

Os operadores **relacionais** na linguagem Javascript adotados são:

| Operador | Descrição |
| -- | -- |
| > | maior |
| >= | maior ou igual |
| > | menor |
| <= | menor ou igual |
| == | igualdade |
| != | diferente |
</p>


Os operadores **lógicos** na linguagem Javascript adotados são:

| Operador | Descrição |
| -- | -- |
| && | conjunção (E) |
| \|\| | disjunção (OU) |
| ! | negação (NÃO) |

Exemplos dos **operadores / expressões lógicas** na vida real:

#### E (Conjunção): &&

> Se amanha tiver: **```SOL```** **E** **```CHUVA```** então **```SaioDeCasa```**

> ```SOL = true```  ```CHUVA = true``` 
> Vou sair de casa? **```SaioDeCasa``` = ???**

> ```SOL = false```  ```CHUVA = true``` 
> Vou sair de casa? **```SaioDeCasa``` = ???**

> ```SOL = false```  ```CHUVA = false``` 
> Vou sair de casa? **```SaioDeCasa``` = ???**

#### OU (Disjunção): ||

> Se amanha tiver: **```SOL```** **OU** **```CHUVA```** então **```SaioDeCasa```** **```SaioDeCasa``` = ???**

> ```SOL = true```  ```CHUVA = true``` 
> Vou sair de casa? **```SaioDeCasa``` = ???**

> ```SOL = false```  ```CHUVA = true``` 
> Vou sair de casa? **```SaioDeCasa``` = ???**

> ```SOL = false```  ```CHUVA = false``` 
> Vou sair de casa? **```SaioDeCasa``` = ???**


#### Tabela verdade Conjunção (E) &&:

| V2| V1 | V1 && V2 |
| -- | -- | -- |
| false | false | false |
| true | false | false |
| false | true | false |
| true | true | true |

#### Tabela verdade Disjunção (OU) ||:

| V2| V1 | V1 \|\| V2 |
| -- | -- | -- |
| false | false | false |
| true | false | true |
| false | true | true |
| true | true | true |


### Estrutura if..else

<p align="justify">

A Linguagem Javascript, como qualquer outra linguagem de programação, suporta desvios condicionais utilizando a estrutura **`if`..`else`**. Quando temos mais de um comando a ser executado para um determinada condição, devemos agrupar estes comandos em um bloco delimitado por chaves, conforme indicado no Exemplo abaixo.
</p>

> caso 1
~~~java
if( /*CONDIÇÃO*/ ) 
   comando1();
~~~


> caso 2
~~~java
if( /*CONDIÇÃO*/ ) {
   comando1();
   comando2();
   // ...
} 
~~~

> caso 3
~~~java
if( /*CONDIÇÃO*/ ) 
  comando1();
else
  comando2();
~~~

> caso 4
~~~java
if( /*CONDIÇÃO*/ ) {
  comando1();
  comando2();
   // ...
} else
  comando3();
~~~

> caso 5
~~~java
if( /*CONDIÇÃO*/ ) 
  comando1();
else {
  comando2();
  comando3();
   // ...
}
~~~

> caso 6
~~~java
if( /*CONDIÇÃO*/ ) {
  comando1();
  comando2();
   // ...
} else {
  comando3();
  comando4();
   // ...
}
~~~

