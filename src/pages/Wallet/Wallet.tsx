import React, { useRef, useState } from 'react';
import { FC, useContext } from "react";
import { useNavigate } from 'react-router-dom';
import CustomButton from '../../components/Button/Button';
import CollapBox from '../../components/CollapBox/CollapBox';
import Modal from '../../components/Modal/Modal';
import { EmptyContextProvider, WalletContextProvider } from "../../context/Wallet.context";
import { WalletItem } from "../../models/wallet.model";
import { accomplishPurchase } from '../../services/offer.service';
import EmptyWalletPage from './EmptyWallet/EmptyWallet';
import styles from "./Wallet.module.scss";

const CartPage: FC = (props) => {

    const navigate = useNavigate();

    const { products, setProducts } = useContext(WalletContextProvider);

    const { modal, setModal } = useContext(EmptyContextProvider);

    const [inputAddress, setInputAddress] = useState('');
    const [inputNumber, setInputNumber] = useState('');
    const [inputComplement, setInputComplement] = useState('');
    const [inputPaymentMethod, setInputPaymentMethod] = useState('');

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

    function validateForm(): boolean {
        if (inputAddress && inputNumber && inputComplement && inputPaymentMethod) {
           
            
            return true
        } else return false;

    }

    async function submitPurchase() {

        if (validateForm()) {
            const payload = {
                inputAddress,
                inputNumber,
                inputComplement,
                inputPaymentMethod,
                products
            };

            try {
                let response = await accomplishPurchase(payload);
                setModal('');
                console.log(response);
                
                navigate(`/comprovante/${response.id}`);
                return response;
            } catch (error) {
                console.log('error', error);
            }
        } else {
            console.log(inputPaymentMethod);
            alert('preencha todos os campos');
        }


    }

    function walletTotalPrice(): string {
        let total = 0;
        products?.forEach((item: WalletItem) => {
            total += (item.valor * item.quantidade);
        });
        return total.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
    }

    function openModal() {
        setModal('two');
    }

    return (
        products?.length !== 0 ?
            <section className={styles.cWallet}>
                <h2>Abaixo os produtos que você selecionou:</h2>
                <div className={styles.divider}></div>
                <p>{walletTotalPrice()}</p>
                <CustomButton label='Finalizar Compra' onClickFunc={() => openModal()}></CustomButton>

                <Modal>

                    <form className={styles.formWallet}>
                        <h2>Para finalizar a compra preencha o formulario abaixo:</h2>

                        <div className={styles.customInput}>
                            <label htmlFor='address'>Endereço:</label>
                            <input required value={inputAddress} onChange={e => setInputAddress(e.target.value)} maxLength={100} autoComplete='off' type="text" id="address" name="address" />
                        </div>

                        <div className={styles.customInput}>
                            <label htmlFor='number'>Número:</label>
                            <input value={inputNumber} onChange={e => setInputNumber(e.target.value)} maxLength={4} type="number" id="number" name="number" />
                        </div>

                        <div className={styles.customInput}>
                            <label htmlFor='Complemento'>Complemento:</label>
                            <input value={inputComplement} onChange={e => setInputComplement(e.target.value)} maxLength={50} type="text" id="complement" name="complement" />
                        </div>

                        <div className={styles.customInput}>
                            <label htmlFor='metPagamento'>Como vai Pagar:</label>
                            <select value={inputPaymentMethod} onChange={e => setInputPaymentMethod(e.target.value)} id='purchaseMethod'>
                                <option value="" selected disabled hidden>Selecione a forma de pagamento:</option>
                                <option value="dinheiro">Dinheiro</option>
                                <option value="debito">Débito</option>
                                <option value="credito">Crédito</option>
                                <option value="pix">pix</option>
                            </select>
                        </div>

                    </form>
                    <CustomButton label='Confirmar Compra' onClickFunc={() => submitPurchase()}></CustomButton>

                </Modal>

                {
                    products?.map((wItem: WalletItem, idx: number) => {
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
                    })
                }
            </section> : <EmptyWalletPage></EmptyWalletPage>
    )
}

export default CartPage;