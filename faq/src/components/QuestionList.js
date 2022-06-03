import React from 'react';
import Question from './Question';
import data from '../data';

const QuestionList = () => {
    return (
        <section className='questionsList'>
            {
                data.map((question) => {
                    return <Question key = {question.id} {...question}/>;
                })
            }
        </section>
    );
}
export default QuestionList;