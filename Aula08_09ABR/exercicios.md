<img src="/assets/teste.svg" width="100%">

# Exercícios - Aula 08 - 09/04

#### Exercício 1
> Dado o valor atual do salário de um funcionário, informe o valor de seu salário reajustado, de acordo com os percentuais indicados a seguir:
> - 50% para aqueles que recebem até R$ 2.000,00.
> - 20% para aqueles que recebem mais de R$ 2.000,00 e menos de R$ 5.000,00.
> - 10% para os demais.

#### Exercício 2
> O índice de massa corpórea de uma pessoa (imc) é dado pelo seu peso (em quilogramas) dividido pelo quadrado de sua altura (em metros). Dados o peso e altura de uma pessoa, informe a sua situação, de acordo com os critérios a seguir:
> - imc ≤ 18,5 ⇒ magro
> - 18,5 < imc ≤ 25,0 ⇒ normal
> - 25,0 < imc ≤ 30,0 ⇒ sobrepeso
> - imc > 30,0 ⇒ obeso
> 

#### Exercício 3 – Ano Bissexto

Crie um programa que solicite um ano e verifique se é **bissexto** usando a regra:

~~~java
(ano % 4 == 0 && ano % 100 != 0) || (ano % 400 == 0)
~~~

#### Exercício 4
> Ler 3 números inteiros e apresentar o maior deles.

#### Exercício 5
> Ler 3 números inteiros e apresentá-los em ordem crescente.


#### Exercício 6 – Validação de Senha

Crie um programa que:

1. Solicite uma senha ao usuário.  
2. Verifique se a senha atende às seguintes regras:

- possui pelo menos 8 caracteres  
- contém pelo menos um número  
- contém pelo menos uma letra maiúscula  

3. Exiba se a senha é válida ou inválida.

📌 **Desafio:**  
Mostre qual regra não foi atendida.


### Exercício 7 – Comparação entre Datas Simplificadas

Crie um programa que:

1. Solicite duas datas no formato:

~~~java
dia, mês e ano
~~~

2. Compare as duas datas e informe:

- se a primeira data é mais antiga
- se a segunda data é mais antiga
- ou se são iguais

📌 **Observação:**  
Considere apenas datas válidas do ponto de vista lógico da comparação. Não é necessário validar quantidade de dias de cada mês.
