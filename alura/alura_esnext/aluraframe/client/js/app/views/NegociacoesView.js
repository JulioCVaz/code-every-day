class NegociacoesView {
    constructor(elemento){
        this._elemento = elemento;
    }

    _template = (modelo) => `
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
    `

    update = (modelo) => this._elemento.innerHTML = this._template(modelo);
}