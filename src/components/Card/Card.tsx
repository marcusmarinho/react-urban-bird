import React from 'react';
import { FC } from 'react';
import styles from "./Card.module.scss"

interface CardProps {
  style: string;
}

const Card: FC<CardProps> = (props) => {

  function dinamicStyle() {
    if (props.style === 'styles.contentH') {
      return styles.contentH
    } else {
      return styles.content
    }

  }
  return (
    <div className={dinamicStyle()}>
      {props.children}
    </div>
  );
}

export default Card;
