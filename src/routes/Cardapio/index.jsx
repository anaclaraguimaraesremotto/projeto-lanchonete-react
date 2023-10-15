
export default function Cardapio(){

    return(
        <main className="main">
            <h1>Cardapio</h1>
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Prato</th>
                            <th>Ingredientes</th>
                            <th>Valor</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>X-Burguer</td>
                            <td>Pão de hamburguer, hamburguer e queijo</td>
                            <td>11,50</td>
                        </tr>
                        <tr>
                            <td>X-Salada</td>
                            <td>Pão de hamburguer, hamburguer, queijo, miçho, alface, maionese e tomate</td>
                            <td>12,50</td>
                        </tr>
                        <tr>
                            <td>X-Bacon</td>
                            <td>Pão de hamburguer, hamburguer, queijo baon alface e maionese</td>
                            <td>13,00</td>
                        </tr>
                        <tr>
                            <td>X-Egg</td>
                            <td>Pão de hamburguer, hamburguer, queijo, ovo, alface, maionese, tomate</td>
                            <td>13,50</td>
                        </tr>
                        <tr>
                            <td>X-Frango</td>
                            <td>Pão de hamburguer, filé de frango, alface, tomate, milho, batata palha, maionese, milho e queijo</td>
                            <td>13,50</td>
                        </tr>
                        <tr>
                            <td>X-Tudo</td>
                            <td>Pão de hamburguer, hamburguer, salsicha, queijo, milho, batata palha, ovo, alface e tomate</td>
                            <td>14,50</td>
                        </tr>
                        <tr>
                            <td>X-Tudo de Frangor</td>
                            <td>Pão de hamburguer, filé de frango, salsicha, queijo, milho, batata palha, ovo, alface e tomate</td>
                            <td>14,50</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </main>
    )
}