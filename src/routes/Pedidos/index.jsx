
export default function Pedidos(){

    return(
        <main className="main">
            <h1>Pedidos</h1>
            <form action="">
                <div>
                    <label htmlFor="">Nome:</label><br />
                    <input type="text" />
                </div>
                <div>
                    <label htmlFor="">Prato:</label><br />
                    <input type="text" />
                </div>
                <div>
                    <label htmlFor="">Quantidade:</label><br />
                    <input type="text" />
                </div>
                <div>
                    <label htmlFor="">Observações:</label><br />
                    <input type="text" />
                </div>
                <div>
                    <input type="button" value="Confirmar" />
                    <input type="button" value="Cancelar" />
                </div>
                <div>
                    <input type="button" value="Mostrar Pedidos" />
                </div>
            </form>
        </main>
    )
}