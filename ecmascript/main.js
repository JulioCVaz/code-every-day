class List{
    constructor(){
        this.data = [];
    }

    add(data){
        this.data.push(data);
        console.log(this.data);
    }
}

class TodoList extends List {
    constructor(){
        super();
        this.usuario = 'Júlio';
    }

    mostraUsuario(){
        console.log(this.usuario);
    }
}


const minhaLista = new TodoList();


document.querySelector("#novotodo").onclick = () => {
    minhaLista.add('novo todo');
}

minhaLista.mostraUsuario();

// metodos estaticos no arquivo static.js