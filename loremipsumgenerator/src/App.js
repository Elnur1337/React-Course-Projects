import React, {useState} from 'react';
import data from './data';
import './App.css';

function App() {
  const [numberOfP, setNumberOfP] = useState(0);
  const [paragraphs, setParagraphs] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (numberOfP <= 0) {
      setParagraphs([]);
    } else {
      setParagraphs(data.slice(0, numberOfP));
    }
  }
  return (
    <section className='App'>
      <h2>Tired of boring lorem text?</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="numberOfP">Insert number of paragraphs</label>
        <input type="number" value={numberOfP} onChange={(e) => setNumberOfP(e.target.value)}/>
        <button type='submit'>Generate</button>
      </form>
      <section>
        {paragraphs.map((item) => <p>{item}</p>)}
      </section>
    </section>
  );
}

export default App;
