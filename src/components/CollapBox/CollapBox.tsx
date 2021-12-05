import React from 'react';
import { FC } from 'react';
import './CollaBox.scss';

interface CollapBoxProps {
    title: string;
  }

const CollapBox: FC<CollapBoxProps> = (props) => {

    return (
        <details className="collapse">
            <summary className="title">{props.title}</summary>
            <div className="description">{props.children}</div>
        </details>
    );
}

export default CollapBox;
