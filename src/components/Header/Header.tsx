import React, { FC } from "react";
import { NavLink } from "react-router-dom";
import '../Header/Header.scss';

const Header:FC = (props) => {
    return (
        <nav>
            <NavLink to='/' >Home</NavLink >
            <NavLink to='/restaurantes'>Restaurantes</NavLink>
            <NavLink to='/diversao' >Diversão</NavLink>
            <NavLink to='/pedidos' >Pedidos</NavLink>
            <NavLink to='/welcome' >Carrinho</NavLink>
        </nav>
    );
}

export default Header