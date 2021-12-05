import React from 'react';
import { FC, useContext } from "react";
import CustomButton from '../../components/Button/Button';
import CollapBox from '../../components/CollapBox/CollapBox';
import { CartContext, EmptyContextProvider } from "../../context/Cart.context";
import { WalletItem } from "../../models/wallet.model";
import styles from "./Wallet.module.scss";

const CartPage: FC = (props) => {
    let { products } = useContext(CartContext);

    let {criteria} = useContext(EmptyContextProvider);

    function changeQuantity(itemCarrinho: WalletItem, soma?: boolean): void {
        const itemCarrinhoEncontrado = products?.find((item: WalletItem) => item.id === itemCarrinho.id) || {
            id: 0,
            img: '',
            titulo: '',
            descricao_oferta: '',
            valor: 0,
            quantidade: 1
        };

        if (soma === true) {
            if (itemCarrinhoEncontrado) {
                itemCarrinhoEncontrado.quantidade += 1;
            }
        } else {
            if (itemCarrinhoEncontrado.quantidade > 0) {
                if (itemCarrinhoEncontrado) {
                    itemCarrinhoEncontrado.quantidade -= 1;

                    if (itemCarrinhoEncontrado.quantidade === 0) {
                        products?.splice(products.lastIndexOf(itemCarrinhoEncontrado), 1);
                    }
                }
            }
        }
    }

    return (
        products?.length !== 0 ?
            <section className={styles.cWallet}>
                <h2>Abaixo os produtos que você selecionou:</h2>
                <div className={styles.divider}></div>
                {products?.map((wItem: WalletItem, idx: number) => {
                    return (
                        <div className={styles.cWalletContent} key={wItem.id}>

                            <CollapBox title={wItem.titulo}>
                                <div className={styles.walletInfo}>
                                    <div>
                                        <p>Preço {wItem.valor}</p>
                                        <p>Quantidade {wItem.quantidade}</p>
                                        <p>Descrição: {wItem.descricao_oferta}</p>
                                    </div>

                                    <div className={styles.walletButtons}>
                                        <CustomButton label="+" onClickFunc={() => changeQuantity(wItem, true) }></CustomButton>
                                        <CustomButton label="-" onClickFunc={() => changeQuantity(wItem, false) }></CustomButton>
                                    </div>
                                </div>
                            </CollapBox>

                        </div>
                    );
                })}
            </section> : <p>carrinho vazio</p>
    )
}

export default CartPage;