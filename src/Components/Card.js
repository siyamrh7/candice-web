import React from 'react';

function Card(props) {
    return (
        <div className='service_img'>
            <img src={props.imgSrc} ></img>
            <h5>{props.heading}</h5>
        </div>
    );
}

export default Card;