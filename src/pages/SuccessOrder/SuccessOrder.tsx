import React from 'react';
import { FC } from "react";
import { useParams } from 'react-router-dom';
import styles from "./SuccessOrder.module.scss";

const SuccessOrderPage:FC =  (props) => {
    const params = useParams();
    return (
        <div className={styles.cSuccess}>
            <h2>Pagamento Recebido</h2>
            <p>Número do pedido:{params.idOrder}</p>
        </div>
    );
}

export default SuccessOrderPage;