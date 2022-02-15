import React, { useContext, useRef, useState } from 'react';
import { FC } from "react";
import { EmptyContextProvider } from '../../context/Wallet.context';
import "./Modal.scss";

const Modal: FC = (props) => {

    const {modal, setModal} = useContext(EmptyContextProvider);

    function close () {
        if (modal === '') {
            setModal('show');
        } else {
            setModal('');
        }
    }

    return (
        <div>
            <div id="modal-container" className={modal}>
                <div className="modal-background">
                    <div className="modal">
                        <div className='closeIco' onClick={() => close()}></div>
                        <div>
                            {props.children}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Modal;