function contar() {
    //PEGANDO OS INPUTS E DIVS
    var inicio = document.getElementById('inicio')//INPUT
    var fim = document.getElementById('fim')//INPUT
    var passo = document.getElementById('passo')//INPUT
    var res = document.getElementById('res')//DIV
    //--------------------------
   
    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){//PARA CASO NÃO ESTEJA DE ACORDO,ELE VAI LIBERAR A MENSAGEM DE ERRO
        alert('[ERRO]')
        res.innerHTML = 'Impossível Contar!'
    }else {
        res.innerHTML = 'Contagem : <br>'//ESCREVER 
        //CONVERTENDO AS VARIAVEIS PARA NÚMEROS
        var i = Number(inicio.value)
        var f = Number(fim.value)
        var p = Number(passo.value)
        /* ----------------------------------- */
        if(p <= 0){//CASO O P SEJA MENOR OU IGUAL A ZERO
            alert('PASSO invalido o. PASSO RECEBEU 1')
            p = 1//VARIAVEL P RECEBE 1
        }
        if(i < f){//CASO O I(inicio) SEJA MENOR QUE O F(final)
            //CONTAGEM CRESCENTE
            for(var c = i ; c <= f; c += p){
                res.innerHTML += `${c} \u{1F449}`//EMOJI DO DEDO
            }
        }else{
            //CONTAGEM REGRESSIVA
            for(var c = i ; c >= f ; c -= p){
                res.innerHTML = `${c} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3c1}`//EMOJI DA BANDEIRA
    }
}