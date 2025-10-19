# Numeros-Primos
Script em JavaScript para encontrar todos os números primos até um número limite definido.

Um número primo é aquele que só pode ser dividido por 1 e por ele mesmo, como por exemplo: 2, 3, 5, 7, 11...

Como o script funciona: 

1. A variável numero é responsável por iterar até o valor limite definido no código (por padrão, 100).
Ela é inicializada com o valor 1.

2. A variável primos é um array utilizado para armazenar todos os números primos encontrados.
Ela é inicializada com [2], pois 2 é o primeiro número primo conhecido.

3. Dentro do laço de repetição while, é definida a condição numero < 100, que determina até onde o programa buscará números primos.
Esse valor pode ser alterado conforme a necessidade.

4. Em cada iteração:
A variável ePrimo é criada e definida inicialmente como true.
O número atual (numero) é testado dentro do método map(), que percorre todos os elementos do array primos.
O teste verifica se o número atual é divisível por algum primo já encontrado:
Se for divisível, a variável ePrimo se torna false, indicando que o número não é primo.
Se não for divisível por nenhum primo, ePrimo permanece true, e o número é adicionado ao array primos.

5. O código também evita repetir números já presentes no array.
Quando numero é igual a um dos elementos do array primos, ePrimo é definido como false.

6. Ao final do laço while, o array primos contém todos os números primos até o limite definido.

Explicação Matemática:

A lógica usada no script se baseia em uma propriedade fundamental dos números primos:
Um número é primo se, e somente se, não for divisível por nenhum número primo menor que ele.

Isso significa que, para determinar se um número n é primo, não é necessário testá-lo contra todos os números anteriores, mas apenas contra os primos que vieram antes dele.

Matematicamente, se um número n for divisível por outro número p (onde p é primo e p < n), então n não é primo, pois possui um divisor além de 1 e dele mesmo.

Exemplo:

Para verificar se 11 é primo, basta testá-lo com os primos menores que ele: 2, 3, 5, 7.

11 ÷ 2 = 5,5 → não é exato

11 ÷ 3 = 3,66 → não é exato

11 ÷ 5 = 2,2 → não é exato

11 ÷ 7 = 1,57 → não é exato

Como não há divisão exata, 11 é primo.
