import React from 'react';
import { FC } from "react";
import { useNavigate } from 'react-router-dom';
import styles from "./FinishOrder.module.scss";

const FinishOrderPage: FC = (props) => {

    return (
        <div className={styles.cFinishOrder}>
            <form action="">
                <div className={styles.formItem}>
                    <label htmlFor='Endereço'>Endereço:</label>
                    <input maxLength={200} className={styles.inputText} type="text" id="Endereço" name="Endereço" />
                </div>

                <div className={styles.formItem}>
                    <label htmlFor='Número'>Número:</label>
                    <input className={styles.inputText} type="number" id="Número" name="Número" />
                </div>

                <div className={styles.formItem}>
                    <label htmlFor='Complemento'>Complemento:</label>
                    <input maxLength={100} className={styles.inputText} type="text" id="Complemento" name="Complemento" />
                </div>

                <div className={styles.formItem}>
                    <label htmlFor='FormaPagamento'>Forma de Pagamento:</label>
                    <select className={styles.inputSelect}  name="" id="">
                        <option value="empty"></option>
                        <option value="dinheiro">Dinheiro</option>
                        <option value="cartao-debito">Cartão de Débito</option>
                        <option value="cartao-credito">Cartão de Crédito</option>
                        <option value="Pix">Pix</option>
                    </select>

                </div>

            </form>
        </div>
    );
};

export default FinishOrderPage;
