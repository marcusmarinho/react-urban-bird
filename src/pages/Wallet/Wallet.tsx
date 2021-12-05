import React from 'react';
import { FC, useContext } from "react";
import CustomButton from '../../components/Button/Button';
import CollapBox from '../../components/CollapBox/CollapBox';
import { WalletContextProvider } from "../../context/Wallet.context";
import { WalletItem } from "../../models/wallet.model";
import styles from "./Wallet.module.scss";

const CartPage: FC = (props) => {

    const { products, setProducts } = useContext(WalletContextProvider);

    function changeQuantity(itemCarrinho: WalletItem, soma?: boolean): void {
        const foundItemWallet = products.find((item: WalletItem) => item.id === itemCarrinho.id) || {
            id: 0,
            img: '',
            titulo: '',
            descricao_oferta: '',
            valor: 0,
            quantidade: 1
        };

        if (soma === true) {
            if (foundItemWallet) {
                foundItemWallet.quantidade += 1;
                setProducts([...products]);
            }
        } else {
            if (foundItemWallet.quantidade > 0) {
                if (foundItemWallet) {
                    foundItemWallet.quantidade -= 1;
                    setProducts([...products]);
                    if (foundItemWallet.quantidade === 0) {
                        products?.splice(products.lastIndexOf(foundItemWallet), 1);
                        if (products) {
                            setProducts([...products]);
                        }
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
                                        <CustomButton label="+" onClickFunc={() => changeQuantity(wItem, true)}></CustomButton>
                                        <CustomButton label="-" onClickFunc={() => changeQuantity(wItem, false)}></CustomButton>
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