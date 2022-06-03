import React from 'react';
const List = ({people}) => {
  return (
    people.map((person) => {
      const {id, imgUrl, name, age} = person;
      return (
      <article key={id} className='personContainer'>
        <img src={imgUrl} alt="Person image" />
        <div className='infoContainer'>
          <h4>{name}</h4>
          <p>{age} years old</p>
        </div>
      </article>
      );
    })
  );
}
export default List;