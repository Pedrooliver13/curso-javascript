//RECURSIVIDADE
function fatorial(n){
    if (n==1){//SE N FOR IGUAL A 1(TRUE)
        return 1
    }else{
        return n * fatorial(n-1)//O 'PARAMETRO N' VEZES A FUNÇÃO 'FATORIAL()' E FATORIAL MENOS UM
    }
}
console.log(fatorial(5))//FAZENDO A CHAMADA DA FUNÇÃO