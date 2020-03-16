
var idade = 67
    console.log(`Você Tem ${idade} anos.`)
/* CONDIÇÃO ALINHADA */
if (idade < 16){
    console.log('Não Vota.')//(TRUE)SE DE TRUE AQUI DAI NÃO É EXECUTADOS OS DEMAIS 
}else if (idade < 18 || idade >= 66) {
    console.log('Voto Opcional.')//(TRUE)
}else{
    console.log('Voto Obrigatório')//FALSE
}
/* ----------------- */