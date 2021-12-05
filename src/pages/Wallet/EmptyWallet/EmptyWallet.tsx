import React from 'react';
import { FC } from "react";
import { useNavigate } from 'react-router';
import CustomButton from '../../../components/Button/Button';
import styles from "./EmptyWallet.module.scss";

const EmptyWalletPage: FC = (props) => {
    let navigate = useNavigate();

    return (
        <div className={styles.cEmptyWallet}>
            <div className={styles.cMsg}>
                <p>Sua sacola está fazia!</p>
            </div>
            <div className={styles.cIcon}></div>
            <div className={styles.cBtn}>
                <CustomButton label="Aproveite as ofertas" onClickFunc={() => navigate('/')} />
            </div>
        </div>
    );
}

export default EmptyWalletPage;