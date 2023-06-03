//comando para fazer a troca das variaves de lugar, subistuindo o valor que consta em 'a' para 'b' e o que consta em 'b' para 'a'

let a = 7
let b = 94
let reserva

reserva = a
a = b 
b = reserva

console.log('a = ' + a + ', b = ' + b)

//outra possibilidade
let c = 7
let d = 94

{[c, d] = [d, c]}

console.log('c = ' + c + ', d = ' + d)
