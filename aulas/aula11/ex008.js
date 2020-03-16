/* FORMA SEQUENCIAL */
 var vel = 60.5
    console.log(`Sua Velocidade é de ${vel} Km/h`)//ESSE "SUBSTITUI" O DOCUMENT ,POIS NO NODE SÓ FUNCIONA O (CONSOLE.LOG)
    console.log('Você Ultrapassou o Limite de Velocidade. MULTADO!')
    console.log('Dirija com Segurança!')
/* ---------------- */



/* fORMA CONDIÇÃO SIMPLES */
var vel2 = 81
console.log(`Sua Velocidade é de ${vel2} Km/h`)

if (vel2 > 80){//É CONDIÇÃO SIMPLES POIS NÃO TEM "SE NÃO"(ELSE)
    console.log('Você Ultrapassou o Limite de Velocidade. MULTADO')
}
console.log('Dirija com Cuidado!')
/* ------------------------ */



/* CONDIÇÃO NORMAL */
var pais = "Brasil"//DIGITE SEU PAIS
console.log(`Seu País é(a) ${pais}.`)

if (pais != 'Brasil'){
    console.log(`Você é Estrangeiro!`)//TRUE
}else{
    console.log(`Você é Brasileiro!`)//FALSE
}
/* --------------- */