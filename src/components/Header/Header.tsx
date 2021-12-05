import React from 'react';
import { FC, useContext } from "react";
import { NavLink } from "react-router-dom";
import styles from "./Header.module.scss";
import { useNavigate } from "react-router-dom";
import { EmptyContextProvider } from "../../context/Wallet.context";

const Header:FC = (props) => {
    const navigate = useNavigate();
    const {animate} = useContext(EmptyContextProvider);
    
    return (
        <nav>
            <NavLink to='/'>Home</NavLink >
            <NavLink to='/restaurantes'>Restaurantes</NavLink>
            <NavLink to='/diversao' >Diversão</NavLink>
            <NavLink to='/pedidos' >Pedidos</NavLink>
            <div onClick={() => navigate('/carrinho')} className={animate === true ? styles.walletIcoSwing : styles.walletIco}></div>
        </nav>
    );
}

export default Header