import React from 'react';

import './card-lists.styles.css';
import { Card } from './card/card.component';

export const CardList = props => {
    return (
        //<div className ="tpa-card-lists-wrapper">{props.children}</div>
        <div className ="tpa-card-lists">
        {
            props.monsters.map(monster => (
                <Card key={ monster.id } monster={monster} />
            ))
        }
        </div>
    )
}