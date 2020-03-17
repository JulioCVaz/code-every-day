/**
 * Contantes
 */

const a = 1;
a = 3; // const variavel imutavel a menos que trabalhe com objeto ou vetor

const usuario = { nome: 'Júlio'};
usuario.nome = 'César';
console.log(usuario);


/**
 * Variaveis de escopo
 */

 function teste(x){
    let y = 2;
    
    if(x > 5){
        let y = 4;
        console.log(x,y);
    }
 }

 teste(10);