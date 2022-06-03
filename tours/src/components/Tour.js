import React, {useState} from 'react';

const Tour = ({id, image, name, price, info, removeTour}) => {
    const [showMore, setShowMore] = useState(true);
    return (
        <article className='card'>
            <img src={image} alt="" />
            <div className='namePriceContainer'>
                <h3>{name}</h3>
                <p>${price}</p>
            </div>
            <p className='infoText'>
                {showMore ? `${info.substring(0, 250)}...` : info}
                <span onClick={() => {
                    setShowMore(!showMore);
                    document.body.style.overflowX = 'hidden';
                }}>{showMore ? ` Show more` : ` Show less`}</span>
            </p>
            <button onClick={() => removeTour(id)}>Not Intersted</button>
        </article>
    );
}
export default Tour;