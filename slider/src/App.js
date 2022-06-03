import React, {useState, useEffect} from 'react';
import {AiOutlineLeft, AiOutlineRight} from 'react-icons/ai';
import {RiDoubleQuotesR} from 'react-icons/ri';
import data from './data';
import './App.css';

function App() {
  const [index, setIndex] = useState(1);
  let lastIndex;
  const nextIndexCheck = () => {
    if (index === data.length) {
          setIndex(1);
        } else {
          setIndex(index + 1);
        }
  }
   useEffect(() => {
    let autoPlay = setInterval(() => nextIndexCheck(), 3000);
    return () => clearInterval(autoPlay);
  }, [index]);
  return (
    <section className="sliderContainer">
      {data.map((slide) => {
        const {id, name, image, review} = slide;
        let currentSlide;
        lastIndex = index - 1;
        if (lastIndex === 0) {
          lastIndex = data.length;
        }
        if (id === index) {
          currentSlide = 'slide activeSlide';
        } else if (id === lastIndex) {
          currentSlide = 'slide lastSlide';
        } else {
          currentSlide = 'slide nextSlide';
        }
        return (
          <article key={id} className={currentSlide}>
            <img src={image} alt="userAvatar" className='userAvatar' />
            <h4 className='userName'>{name}</h4>
            <p className='userReview'>{review}</p>
            <RiDoubleQuotesR className='quoteIcon'/>
          </article>
        );
      })}
      <AiOutlineLeft className='prevBtn prevNextBtn' onClick={() => setIndex(lastIndex)}/>
      <AiOutlineRight className='nextBtn prevNextBtn' onClick={() => nextIndexCheck()}/>
    </section>
  );
}

export default App;
