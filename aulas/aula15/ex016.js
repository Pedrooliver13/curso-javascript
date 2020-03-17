/* PERGUNTANDO A LOCALIZAÇÃO NO VETOR */
num = [3,2,7,9,10]//VARIVEL COMPOSTA

var pos = num.indexOf(11)//DIGITE O NÚMERO QUE VOCÊ QUER ENCONTRAR

if(pos == -1){//SE A VARIAVEL POS FOR IGUAL A -1 É 'TRUE'
    console.log('Não Encontramos Nada')//E LIBERA ESSE BLOCO(TRUE)
}else{//SE NÃO ENTÃO É FALSE
    console.log(`encontramos... ele é a posição ${pos}`)//E LIBERA ESSE BLOCO(FALSE)
}

/* 
EXEMPLO DE COMO É CONTADO AS SUAS POSIÇÕES
0°==3,
1°==2,
2°==7,
3°==9,
4°==10
 */