import { Link } from "react-router-dom"

export default function Menu(){

    return(
        <>
            <Link to={'/'}>Home</Link> 
            <span> | </span>
            <Link to={'/cardapio'}>Cardapio</Link> 
            <span> | </span>
            <Link to={'/pedidos'}>pedidos</Link> 
        </>
    )
}