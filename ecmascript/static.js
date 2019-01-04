class Matematica{
    // metodo estatico ele só enxerga o que está dentro do metodo, o restante nao conseguimos utilizar 
    static soma(a, b){
        return a + b;
    }
}

console.log(Matematica.soma(1,2));