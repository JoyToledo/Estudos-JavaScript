/*
Esse é um comentario de varias linhas, 
você pode utilizar o * para novas linnhas, caso você ache util
*/

console.log('Esse é um texo que aparece no console')

var produto = 'Mesa' // declaramos uma variavel 'produto' e atribuimos o valor (=) mesa a ela (nesse caso o valor é uma string, uma sequencia de caracteres).

let preco =  100// também utilizamos para declaram uma variavel, nesse caso declaramos a variavl 'preco' e atribuimos o valor '10' a ela, nesse caso o valor é tipo number.

let disponivel = true // outra variavel que declaramos, nesse caso uma variavel do tipo boolean onde só pode ter apenas dois valores verdade(true) ou false(falso).

let desconto = 0.5

const idProduto = '123' // nesse caso declaramos uma constante, a diferença que ela tem da variavel é que o valor declaraso não permite ser modificado. Se houver tentativa de mudar a constante o log vai retornar um erro.

//o comando typeof serve para mostrar no console o tipo valor que esta sendo inserido, ou o no caso de uma variavel
console.log(typeof 'Esse é um texto tipo istring')
console.log(typeof 10)
console.log(typeof 3.5)//Importante, o divisor de casas decimais nessa linguagem é definido pelo 'ponto'(.)
console.log(typeof true)

console.log('Código do Produto: ' + idProduto + ', Produto: ' + produto + ', Valor: ' + preco) // nesse caso utilizamos o '+' que serve para concatenar os valor, nesse caso juntar os dados declarados

console.log(1+1)//nesse caso utilizamos o mesmo simbolo, porém aqui como são dois valores do tipo number, ele vai servir para somar os valores, logo, o valor que vai constar no console será a soma deles.

console.log('Valor do Produto: ' + preco + ', Valor com Desconto: ' + preco * (1 - desconto))//nesse caso utilizamos o simbolo '+' para concatenar os valores e os simbolos '-' e '*' para fazer um calculo matematico, como o valor do produto com o desconto, também utilizamos o simbolo '()' mais de umas vez, foi necessario devido a precisarmos primeiro ter o valor da porcentagem e depois o fazer o canculo do desconto, caso ele não tivesse sido utilizado, o calculo seria outro, fazendo primento o valor de preço * 1 e depois - o valor declaro de desconto.
console.log(preco * 1 - desconto)//exemplo de como ficaria o valor sem o parenteses a mais.

