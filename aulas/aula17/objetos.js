/* varivel objetos  */
var amigo = {nome:'jose', sexo:'M', peso:85.4,
engordar(p=0){
console.log('ENGORDOU')
this.peso += p
}}

amigo.engordar(10)
console.log(`${amigo.nome} Pesa ${amigo.peso} `)
