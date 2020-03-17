const arr = [1,3,4,5,8,9];

const newArr = arr.map((item)=>{
    return item * 2 ;
 });

 console.log(newArr);


// caso quando passamos apenas um parametro
 const newArr = arr.map( item =>{
    return item * 2 ;
 });

 console.log(newArr);


 // caso quando é apenas um return
 const newArr = arr.map( item => item * 2);

 console.log(newArr);

 // funções

 const teste = () => {
     return 'teste';
 }

 console.log(teste);

//  return direto vetor
 const teste = () => ['teste1', 'teste2'];

console.log(teste);

//  return direto objeto
const teste = () => ({nome: 'Júlio'});

console.log(teste);


