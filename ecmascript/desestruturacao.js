const usuario = {
    nome: 'Júlio',
    idade: 23,
    endereco: {
        cidade: 'Rio do Sul',
        estado: 'SC'
    },
};

// padrão 

const nome = usuario.nome;
const cidade = usuario.endereco.cidade;

// desestruturado 

const {nome, idade, endereco: {estado}} = usuario;

// funcao usando desestruturacao

function mostraNome({nome,idade}){
    console.log(nome, idade);
}

mostraNome(usuario);