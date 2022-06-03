import React, {useState} from 'react';
import data from '../data';
import Review from './Review';
import {GrFormPrevious, GrFormNext} from 'react-icons/gr'
const ReviewSlider = () => {
    let [reviewId, setReviewId] = useState(0);
    const review = data[reviewId];
    return (
        <section className='reviewSlider'>
            <Review {...review}/>
            <div className='prevNextContainer'>
                <button onClick={() => {
                        if (reviewId > 0) {
                            setReviewId(reviewId - 1);
                        }
                    }}><GrFormPrevious className='prevBtn' />
                </button>
                <button onClick={() => {
                        if (reviewId < data.length - 1) {
                            setReviewId(reviewId + 1);
                        }
                    }}><GrFormNext className='nextBtn' />
                </button>
            </div>
            <button className='surpriseBtn' onClick={() => {
                setReviewId(Math.floor(Math.random() * data.length));
            }}>Surprise Me</button>
        </section>
    );
}

export default ReviewSlider;