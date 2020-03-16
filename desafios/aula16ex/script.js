/* EXERCÍCIO MUITO DIFÍCIL(PELO MENOS POR ENQUANTO) */

/* 1° PASSO = PEGAR OS CONCEITOS BÁSICOS */
var num = document.querySelector('input#soma')//INPUT PRINCIPAL
var selec = document.querySelector('select#selec')//SELEC
var res = document.getElementById('res')//DIV PARA MOSTRAR A RESPOSTA
var valores = []//VARIAVEL COMPOSTA 

/* 2° PASSO = CRIA FUNÇÕES */
function isNumero(n){//CRIANDO UM FUNÇAO COM O PARAMETRO
    if(Number(n) >= 1 && Number(n) <= 100){//PARAMETRO N FOR MAIOR OU IGUAL 1 && PARAMETRO N FOR MENOR OU IGUAL 100
        return true //RETORNA A RESPOSTA (TRUE) 
    }else{
       return false//RETORNA A RESPOSTA
    }
}

function inLista(n , l){
    if(l.indexOf(Number(n)) !=  -1){//SE O PARAMETRO N FOR DIFERENTE DE -1 ENTAO É (TRUE)
        return  true//RETORNA A RESPOSTA
    }else{
        return false
    }
}
/* 3°PASS0 = FUNÇÃO QUE NÓS FIZEMOS A CHAMADA */
function adicionar(){//AÇÃO
    if(isNumero(num.value) && !inLista(num.value , valores)){//FUNÇÃO 'ISNUMERO' TEM COMO OBJETIVO AQUI VER SE O 'NUM' É REALMENTE UM NÚMERO  && FUNÇÃO E VER SE NÃO ESTA REPETINDO OS VALORES JÁ DIGITADOS(LEMBRANDO QUE A EXCLAMAÇÃO QUER DIZER NÃO)
        valores.push(Number(num.value))//VARIAVEL COMPOSTA VAI ADICIONA UM ÚLTIMO ELEMENTO SEMPRE QUE FOR DIGITADO NA VARIAVEL 'NUM'(QUE NO CASO É O INPUT PRINCIPAL) 
        let item =document.createElement('option')//CRIA UM ELEMENTO OPTION
        item.text = `Valor ${num.value} Adicionados`//CRIANDO UM STRING DENTRO DO ITEM
        selec.appendChild(item)//VARIAVEL 'SELEC' RECEBE UM ELEMENTO FILHO QUE NO CASO É A VARIAVEL ITEM(OPTION) 
    }else{
        alert('[ERRO] Valor Invalido ou Ja Encontrado na Lista')
    }
    num.value = ''//PARA A BARRA DE DIGITAÇÃO SE 'AUTO-LIMPAR'
    num.focus()//PARA O FOCO NÃO SAIR DELE,OU SEJA , QUANDO CLICAR PARA ADD O ELEMENTO ELE VAI VOLTA O FOCO PARA A BARRA DE DIGITAÇÃO.
}

function finalizar(){
    if (valores.length == 0){
        alert('Adiciones Valores para Finalizar')
    }else{
        let total = valores.length 
        let maior = valores[0]
        let menor = valores[0]
        var soma = 0
        var media = 0
        for (let pos in valores){
            soma += valores[pos]
            if(valores[pos] > maior){
                maior = valores[pos]
            }
            if(valores[pos] < menor){
                menor = valores[pos]
            }
        media = soma / total
        res.innerHTML = ''
        res.innerHTML += `<p>Ao Total Temos ${total}  Números</p> `
        res.innerHTML += `<p>O Maior Valor é ${maior}</p>`
        res.innerHTML += `<p>O Menor Valor é ${menor}</p>`
        res.innerHTML += `<p>Somando Todos os Valores dá ${soma}</>`
        res.innerHTML += `<p>A Media Dos Valores é ${media}</p>`
                }
    }
}

 