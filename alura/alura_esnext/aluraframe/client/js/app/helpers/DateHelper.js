class DateHelper {
    
    constructor(){
        throw new Error("Está classe não pode ser instanciada");
    }

    // converte data para texto
    static dataParaTexto = data => `${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}`;

    // converte texto para data
    static textoParaData = texto => {
        
        if(!/^\d{4}-\d{2}-\d{2}$/.test(texto))
            throw new Error("Deve seguir o padrão aaaa-mm-dd");

        return new Date(
        ...texto
        .split('-')
        .map((item, index) => item - index % 2));
    }
}