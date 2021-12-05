import React from 'react';
import { FC } from 'react';
import styles from './Button.module.scss';

interface ButtonProps {
    onClickFunc: any;
    label: string;
}

const CustomButton:FC<ButtonProps> = (props) => {
    const func = props.onClickFunc;
    return (
        <div>
            <button onClick={func} className={styles.button}>{props.label}</button>
        </div>
    );
}

export default CustomButton;