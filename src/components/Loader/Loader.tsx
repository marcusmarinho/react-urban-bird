import React from 'react';
import { FC } from 'react';
import styles from './Loader.module.scss';

interface LoaderProps {
    isLoading: boolean;
}

const Loader:FC<LoaderProps> = (props) => {
    const isLoading: boolean = props.isLoading;
    return (
        <div>
            {isLoading &&
                <div className={styles.overlay}>
                    <div className={styles.spinner}></div>
                </div>
            }
        </div>
    );
}

export default Loader