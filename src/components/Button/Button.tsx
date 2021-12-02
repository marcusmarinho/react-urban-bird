import React from 'react';
import { FC } from 'react';
import './Button.scss';

interface ButtonProps {
    onClickFunc: any;
    label: string;
}

const CustomButton:FC<ButtonProps> = (props) => {
    const func = props.onClickFunc;
    return (
        <div>
            <button onClick={func} className="button">{props.label}</button>
        </div>
    );
}

export default CustomButton;