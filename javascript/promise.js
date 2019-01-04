// exemplo de promisse com requisicao ajax sem biblioteca

let minhaPromisse = () => {
    return new Promise((resolve,reject) => {
        let xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://api.github.com/users/JulioCVaz');
        xhr.send(null);

        xhr.onreadystatechange = function(){
            if(xhr.readyState === 4){
                if(xhr.status === 200){
                    resolve(JSON.parse(xhr.reponse));
                }else{
                    reject('Erro na requisição');
                }
            }
        }
    });
}

minhaPromisse().then((response) => console.log(response)).catch((error) => console.log(error));