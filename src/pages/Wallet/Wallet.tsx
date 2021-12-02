import React from 'react';
import { FC, useContext } from "react";
import Card from "../../components/Card/Card";
import {CartContext} from "../../context/Cart.context";
import { WalletItem } from "../../models/wallet.model";
import "./Wallet.scss";

const CartPage:FC = (props) => {
    const {products} = useContext(CartContext);

    return (
        products?.length !== 0 ?
            <section className="c-detail">
                {products?.map((wItem: WalletItem, idx: number) => {
                    return (
                        <div key={wItem.id}>
                            <Card>
                                <div className="wallet-info">
                                    <h2>{wItem.titulo}</h2>
                                    <p className="card--subtitle">Categoria {wItem.valor}</p>
                                    <p>{wItem.descricao_oferta}</p>
                                </div>
                            </Card>
                        </div>
                    );
                })}
            </section> : <p>carrinho vazio</p>
    )
}

export default CartPage;