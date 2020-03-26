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
    }

    voa() {
        // executa o método `voa` de `Avião` usando como contexto a instância de `Passarinho`
        Reflect.apply(Aviao.prototype.voa, this, []);
    }
}