function verificar(){
    /* PEGANDO O ANO */
    var data = new Date()//PEGAR AS INFORMAÇÕES DO SITEMA OPRECIONAL(PC)
    var ano = data.getFullYear()//PEGANDO O ANO(ELE PEGA OS QUATROS DIGITOS)
   
    /* ------------- */
    /* FORMULÁRIO DE PREECHIMENTO E CONVEÇÃO PARA O BOTÃO FUCIONAR */
    var form = document.querySelector('input#txtano')//BARRA DE (ANO DE NASCIMENTO)
    var radsex = document.getElementsByName('radsex')//INPUTS RADIOS
    var fano = form.value//CONVERÇÃO DO BOTÃO
    var idade = ano - fano//FAZENDO A CONTA DA IDADE
    /* ----------------------------------------------------------- */
    /* DIV PARA PREECHIMENTO DA RESPOSTA , E VARIAVEL PARA DEFINIR O GENERO */
    var res = document.getElementById('res')//DIV
    var genero = ''//VARIAVEL PARA DEFINIR O GENERO
    /* --------------------------------------------------------------------- */
    /* CRIANDO TAG IMG NO JAVASCRIPT */
    var img = document.createElement('img')
    img.setAttribute('id' , ' foto')

    if(fano == 0 || fano > ano){
        alert('[ERRO] Tente Novamente')
        img.setAttribute('src' , 'img/cesinha.png')
    }else if(radsex[0].checked){ 
        genero = 'Masculino'
        if(idade <= 3){
            img.setAttribute('src' , 'img/baby-cesinha.png')
        }else if(idade <= 12 && idade <= 16){
            img.setAttribute('src', 'img/cesinha-child.png')
        }else if(idade > 16 && idade <= 22){
            img.setAttribute('src' , 'img/young-cesinha.png')
        }else if(idade > 22 && idade <= 48){
            img.setAttribute('src' , 'img/adult-cesinha02.png')
        }else {
            img.setAttribute('src', 'img/old-man.png')
        }
    }
    res.innerHTML = `Detectamos um Gênero ${genero} com ${idade}`
    res.appendChild(img)
}