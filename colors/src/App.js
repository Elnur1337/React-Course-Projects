import React, {useState, useEffect} from 'react';
import uuid from 'react-uuid';
import Values from 'values.js';
import './App.css';

function App() {
  const [color, setColor] = useState('#fff');
  const [colorInput, setColorInput] = useState('');
  let shades = new Values(color).all();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (CSS.supports('background-color', colorInput)) {
      setColor(colorInput);
      shades = new Values(color).all();
    }
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor='colorInput'>Color:</label>
        <input type="text" id='colorInput' name='colorInput' value={colorInput} onChange={(e) => {
          setColorInput(e.target.value);
        
        }}/>
        <button type='submit'>Submit</button>
      </form>
      <section className='colorsContainer'>
        {shades.map((color) => {
          return (
            <article key={uuid()} className='colorContainer' style={{background:`#${color.hex}`}} onClick={() => navigator.clipboard.writeText(`#${color.hex}`)}>
              <p>{`${color.weight}%`}</p>
              <p>{`#${color.hex}`}</p>
            </article>
          );
        })}
      </section>
    </>
  );
}

export default App;
