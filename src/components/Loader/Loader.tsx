import { FC } from 'react';
import '../Loader/Loader.scss';

interface LoaderProps {
    isLoading: boolean;
}

const Loader:FC<LoaderProps> = (props) => {
    const isLoading: boolean = props.isLoading;
    return (
        <div>
            {isLoading &&
                <div className="overlay">
                    <div className="spinner"></div>
                </div>
            }
        </div>
    );
}

export default Loader