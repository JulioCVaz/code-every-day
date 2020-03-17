// add spread e rest no babel yarn add @babel/plugin-proposal-object-rest-spread

// rest

// object
const usuario = {
    nome: 'Júlio',
    idade: 21,
    empresa: 'Grupo KRS'
};

const {nome, ...resto} = usuario;

console.log(nome);
console.log(resto);

// vetor
const arr = [1,2,3,4];

const [a,b,...c] = arr;

console.log(a);
console.log(b);
console.log(c);

// funcao

function soma(...params){
    return params.reduce((total, next) => total + next);
}
console.log(soma(1,3,4));

function soma(a, b, ...params){
    return params;
}
console.log(soma(1,3,4,4,5,6,7));


//spread

const arr1 = [1,2,3];
const arr2 = [4,5,6];

const arr3 = [...arr1, ...arr2];

// obj

const usuario1 = {
    nome: 'Júlio',
    idade: 21,
    empresa: 'Grupo KRS'
};

const usuario2 = {...usuario1, nome: 'César'};

console.log(usuario2);
