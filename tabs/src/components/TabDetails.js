import React from 'react';

const TabDetails = ({company, dates, duties, title}) => {
    return (
        <section>
            <h2>{title}</h2>
            <h3>{company}</h3>
            <p>{dates}</p>
            <ul>
              {duties.map((duty, index) => {
                  return <li key={index}>{duty}</li>
              })}
            </ul>
        </section>
    );
}
export default TabDetails;