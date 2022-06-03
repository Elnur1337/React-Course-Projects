import React, {useState} from 'react';
import MenuItem from './MenuItem';
import data from '../data';

const MenuList = () => {
    const [filter, setFilter] = useState('all');
    let food;
    if (filter === 'all') {
        food = data;
    } else {
        food = data.filter((foodItem) => foodItem.category === filter);
    }
    return (
        <>
            <div className='btnContainer'>
                <button onClick={() => setFilter('all')}>All</button>
                <button onClick={() => setFilter('breakfest')}>Breakfest</button>
                <button onClick={() => setFilter('lunch')}>Lunch</button>
                <button onClick={() => setFilter('dinner')}>Dinner</button>
            </div>
            <section className='menuItems'>
                {food.map((item) => {
                    return <MenuItem key={item.id} {...item}/>
                })}
            </section>
        </>
    );
}
export default MenuList;