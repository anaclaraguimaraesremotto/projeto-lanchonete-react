import { Link } from "react-router-dom"

export default function Menu(){

    return(
        <nav className="navBar">
            <div className="divLink">
                <Link className="link" to={'/'}>Home</Link> 
                <span> | </span>
                <Link className="link" to={'/cardapio'}>Cardapio</Link> 
                <span> | </span>
                <Link className="link" to={'/pedidos'}>pedidos</Link> 
            </div>
        </nav>
    )
}