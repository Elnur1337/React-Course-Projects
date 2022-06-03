import React from 'react';
import ReviewSlider from './components/ReviewSlider';
import './App.css';

function App() {
  document.title = 'Reviews';
  return (
    <section className='reviewsSection'>
      <h3>Reviews</h3>
      <ReviewSlider/>
    </section>
  );
}

export default App;
