import React, {useState} from 'react';
import List from './components/List';
import data from './data';
import './App.css';
function App() {
  const [people, setPeople] = useState(data);
  return (
    <section className='container'>
      <h3>{people.length} birthdays today</h3>
      <List people = {people}/>
      <button className='clearBtn' onClick={() => setPeople([])}>Clear All</button>
    </section>
  );
}
export default App;
