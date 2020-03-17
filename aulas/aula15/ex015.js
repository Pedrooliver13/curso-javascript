/* VARIAVEL COMPOSTA COM REPETIÇÃO */

num = [5,8,4,6,7]//VARIAVEL COMPOSTA

/* FORMA ERRADISSSSIMA */
console.log(num[0])
console.log(num[1])
console.log(num[2])
console.log(num[3])
console.log(num[4])
/* ----------------- */

/* FORMA CERTA */
for(var pos = 0;pos < num.length;pos++){//ESTRUTURA DE REPETIÇÃO
    console.log(num[pos])//ELEMENTO QUE VAI SER REPETIDO
}
/* ----------- */

/* FORMA CERTA SIMPLIFICADA  */
for(let posicao in num ){//PARA CADA POSIÇÃO NA VARIAVEL COMPOSTA A RESPOSTA VAI SER 'TRUE'
    console.log(`Forma Simplificada ${num[posicao]}`)
}
/* ------------------------- */

/* 
EXEMPLO DE COMO É CONTADO AS SUAS POSIÇÕES
0°==5,
1°==9,
2°==8,
3°==2,
4°==3
 */