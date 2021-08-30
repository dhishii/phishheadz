import React from "react";

const Card = ({ id, name, bg, color, eqt, exp, set }) => {
    return (
        <div className='bg-white dib br3 pa3 ma2 grow bw2 shadow-2'>
            <img alt='phishhead' src = {`../phishimg/Phish${id}.png`} width='200' />
            <div>
                <h3>{name}</h3>
                <p id='card'>{color}</p>
                <p id='card'>{bg}</p>
                <p id='card'>{eqt}</p>
                <p id='card'>{exp}</p>
                <p id='set'>{set}</p>

            </div>
        </div>
    );
}

export default Card;