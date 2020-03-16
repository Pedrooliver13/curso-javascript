function verificar(){
  
  /* RELACIONANDO COM NUMEROS */
  var data = new Date()//PEGANDO DATAS,HORAS ETC DO SISTEMA(PC)
  var ano = data.getFullYear()//PEGANDO O ANO ATUAL
  var form = document.querySelector('input#txtano')//INPUT USADO PARA PREENCHER O ANO
  var fano = form.value/* CONVERTENDO PARA O BOTÃO FUNCIONAR */
  var idade = ano - fano/* ANO ATUAL MENOS O ANO DIGITADO */
  /* ------------------------- */
  /* PARA FAZER IMAGEM FUNCIONAR */
  var res = document.querySelector('div#res')//DIV COM ID RES
  var img = document.createElement('img')//MANADANDO CRIAR UMA TAG IMG
  img.setAttribute('id', 'foto')/* CRIANDO UM ID E DANDO O NOME DELE(DO ID) */
  /* ---------------------------- */
  /* INPUT DE PREENCHIMENTO DE DADOS */
  var radsex = document.getElementsByName('radsex')
  var genero = radsex[0].checked ? 'Masculino':'Feminino'
  /* ------------------------------- */
  
if(fano.length == 0 || Number(fano.value) > ano){//SE O QUE FOI DIGITADO FOR IGUAL A 0(TRUE) || SE O NUMERO DIGITADO FOR MAIOR QUE O ANO ATUAL(TRUE)
  alert('[ERRO] Verifique os Resultados Novamente')
}else if(radsex[0].checked){
  /* Masculino */
  if(idade <= 12){
    img.setAttribute('src', 'img/baby-boy.png')
  }else if(idade >= 18 && idade <= 22){//SE IDADE FOR MAIOR OU IGUAL A 18(TRUE) && SE A IDADE FOR MENOR OU IGUAL 22(TRUE)
    img.setAttribute('src', 'img/young-boy.png')
  }else if(idade >= 23 && idade <= 45){
    img.setAttribute('src' , 'img/young-man.png')
  }else {
    img.setAttribute('src' , 'img/old-man.png')
  }
  /* ---------- */

}else if(radsex[1].checked){//SE O SEGUNDO INPUT(COM ID 'RADSEX')ESTIVER SELECIONADO(TRUE)
  genero ='feminino'
  /* FEMININO */
  if(idade < 10){
    img.setAttribute('src', 'img/helena.png')
  }else if(idade >= 18 && idade <= 25){
    img.setAttribute('src' , 'img/young-girl.png')
  }else if(idade >= 23 && idade <= 45){
    img.setAttribute('src', 'img/young-woman.png')
  }else{
    img.setAttribute('src' , 'img/old-girl.png')
  }
  /* ---------- */
}
 res.innerHTML = `Identificamos o Gênero ${genero} com ${idade} anos`
 res.appendChild(img)//ELE SÓ MOSTRA IMAGEM SE TIVER ISSO.
 }

/* function */