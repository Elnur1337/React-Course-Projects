import {FaQuoteRight} from 'react-icons/fa'
const Review = ({name, image, review}) => {
    return (
        <section className='review'>
            <div className='imageContainer'>
                <div className="circle"></div>
                <img src={image} alt="personImage" />
                <FaQuoteRight className='quoteIcon'/>
            </div>
            <p className='name'>{name}</p>
            <p className='reviewText'>{review}</p>
        </section>
    );
}

export default Review;