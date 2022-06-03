import React, {useState} from 'react';
import {BsArrowDownCircle, BsArrowUpCircle} from 'react-icons/bs'

const Question = ({id, title, answer}) => {
    const [isAnswerShown, setIsAnswerShown] = useState(false);
    return (
        <article className='questionContainer'>
            <div className='questionHeader'>
                <h3>{title}</h3>
                <button className='toggleAnswerBtn' onClick={() => setIsAnswerShown(!isAnswerShown)}>
                    {isAnswerShown ? <BsArrowUpCircle className='icon'/> : <BsArrowDownCircle className='icon'/>}
                </button>
            </div>
            {isAnswerShown && <p className='answer'>{answer}</p>}
        </article>
    );
}
export default Question;