import React from "react";
import { NavLink } from "react-router-dom";
import '../Header/Header.scss';
export default (props:any) => {
    console.log(props.navId)
    return (
        <nav>
            <NavLink to='/' >Home</NavLink >
            <NavLink to='/restaurantes'>Restaurantes</NavLink >
            <NavLink to='/diversao' >Diversão</NavLink >
            <NavLink to='/pedidos' >Pedidos</NavLink >
            <NavLink to='/welcome' >Carrinho</NavLink >
        </nav>
    )
}