function parimpar(n){//CRIANDO UMA FUNÇÃO E USANDO O PARAMETRO 'N'
    if(n%2 == 0){//SE 'N' FOR DIVIDIDO POR DOIS É PAR
        return 'Par!'
    }else{
        return 'impar!'//RETURN LEVA O VALOR 'IMPAR!' E SUBSCREVE O QUE TINHA DENTRO DA VARIAVEL
    }
}
var res = parimpar(8)//ESSE É A CHAMADA PARA A FUNCTION

console.log(`O Resultado é ${res}`)//MANDANDO MOSTRAR O RESULTADO