//CRIANDO UMA FUNÇÃO...
function carregar(){

    var msg = document.getElementById('msg')//PEGANDO ELEMENTO PELO ID
    var imag = document.getElementById('img')//PEGANDO ELEMENTO PELO ID
    var data = new Date()//PEGANDO A DATA DO SISTEMA OPERACIONAL(PC)
    var horas = data.getHours()//"CONVERTENDO" A DATA PARA HORAS 

    msg.innerText = `São Exatamente ${horas} Horas`//PEGANDO A VARIAVEL(MSG) E ESCREVENDO(INNERTEXT)

    if(horas >= 0 && horas < 12){//SE AS HORAS FOR MAIOR QUE OU IGUAL A 0 (TRUE) && SE HORAS FOR MENOR QUE 12 (TRUE)
        imag.src = 'img/manha.png'
    }else if (horas >= 12 && horas <= 18){ 
        imag.src = 'img/tarde.png'
        document.body.style.background = 'orange'
    }else{
        imag.src = 'img/noite.png'
        document.body.style.background = '#333'
    }
}