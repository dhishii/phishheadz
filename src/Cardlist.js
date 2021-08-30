import React from 'react';
import Card from './Card';


const Cardlist = ({ phishheadz }) => {
    const cardArray = phishheadz.map((phish, i) => {
        return <Card id={phishheadz[i].id} name={phishheadz[i].name} bg={phishheadz[i].bg} color={phishheadz[i].color} eqt={phishheadz[i].eqt} exp={phishheadz[i].exp} set={phishheadz[i].set} />
    })
    return (
        <div>
            {cardArray}
        </div>
    );
}

export default Cardlist;