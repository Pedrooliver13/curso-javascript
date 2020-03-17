function fatorial(n){
    let fat = 1//VARIAVEL FAT RECEBE 1
    for (var c = n;c > 1;c--){//VARIAVEL 'C' RECEBE 'N' ; ENQUANTO 'C' FOR MAIOR QUE 1; 'C'= C-1 
        fat *= c//VARIAVEL 'FAT' VEZES 'C'
    }
    return fat 
}
console.log(`o Fatorial de é 5` + fatorial(5))//MANDANDO APARECER A RESPOSTA