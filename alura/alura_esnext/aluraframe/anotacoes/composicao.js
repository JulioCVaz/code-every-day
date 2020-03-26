class Aviao {

    constructor(nome) {
        this._nome = nome;
    }

    voa() {
        alert(`${this._nome} está voando`);
    }

    ligaMotor() {
        console.log('liga o motor');
    }

    fechaPortas() {
        console.log('Portas sendo fechadas');
    }
}

class Passarinho {

    constructor(nome) {
        this._nome = nome;
        // guarda uma instância de avião
        this._aviao = new Aviao(nome);
    }

    voa() {
        // usa o método voa de Aviao
        this._aviao.voa();
    }
}