
import { FC } from 'react';
import './Card.scss';

const Card:FC = (props) => {
    return (
        <div className="content">
          {props.children}
        </div>
    );
}

export default Card;
