class NegociacoesView extends View{
    // artigo: Herança x Composicao = https://blog.caelum.com.br/como-nao-aprender-orientacao-a-objetos-heranca/


    // posso remover o contructor porque ele é um espelho do constructor da super class
    // caso eu tivesse um novo parametro, eu poderia adiciona-lo após o super sem reescrever os parametros do constructor da super classe
    constructor(elemento){
        super(elemento);
        // this._novoparametro = novoparametro;
    }

    template = (modelo) => `
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>DATA</th>
                    <th>QUANTIDADE</th>
                    <th>VALOR</th>
                    <th>VOLUME</th>
                </tr>
            </thead>
            <tbody>
                ${
                    modelo.negociacoes.map(negociacao => `
                        <tr>
                            <td>${DateHelper.dataParaTexto(negociacao.data)}</td>
                            <td>${negociacao.quantidade}</td>
                            <td>${negociacao.valor}</td>
                            <td>${negociacao.volume}</td>
                        </tr>
                    `).join('')
                }
            </tbody>
            <tfoot>
                <td colspan="3"></td>
                <td>
                    ${modelo.negociacoes.reduce((total, negociacao) => total + negociacao.volume, 0.0)}
                </td>
            </tfoot>
        </table>
    `;
}