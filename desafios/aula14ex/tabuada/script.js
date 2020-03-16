function tabuada(){
    var number = document.getElementById('number')
    var tab = document.getElementById('seltab')
    if(number.value.length == 0){//PARA CASO NÃO DIGITAR NADA,ELE DÁ UM ERRO(PROPOSITALMENTE)!
        alert('[ERRO]')
    }else{
        /* CONVERTENDO PARA NÚMEROS */
        var n = Number(number.value)
        /* ------------------------- */
        tab.innerHTML = ''//PARA LIMPAR QUANDO DIGITAR UM NOVO NÚMERO
        for(var c = 1 ; c <= 10 ; c++){
            let item = document.createElement('option')//CRIA UM ELEMETO TAG
            item.text = `${n}X${c}= ${c*n}`//FORMA DE MONTAR AS CONTAS 
            tab.appendChild(item)//RECEBER UM ELEMENTO FILHO
        }//FOR
    }//IF
}//FUNCTION