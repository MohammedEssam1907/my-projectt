import React from 'react';

import Classes from './Card.module.css';

export default function Card(props) {
  return <>
    <div className={`${Classes.card} ${props.className}`}>{props.children}</div>
  </>;
};

