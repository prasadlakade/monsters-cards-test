import React from 'react';

import './card.styles.css';

export const Card = (props) => {
    return (
        <div className = "tpa-card">
            <div className = "tpa-card-inner">
                <div>
                    <img alt='monsters' src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`} />                
                </div>
                <h2>{props.monster.name}</h2>
                <p>{props.monster.email}</p>
            </div>
        </div>
    )
}