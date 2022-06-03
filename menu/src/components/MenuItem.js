import React from 'react';

const MenuItem = ({title, image}) => {
    return (
        <article className='menuItem'>
            <img src={image} alt="menuItemPicture" />
            <h3>{title.toUpperCase()}</h3>
        </article>
    );
}
export default MenuItem;