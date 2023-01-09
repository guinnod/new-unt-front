import { Card } from '../card';
import './card-quiz.css';
export const CardQuiz = ({ currentQuestion, userAnswer, current, selectOption }) => {
    return (
        <Card>
            <div className='card-quiz__anchor'>
                <div className="card-quiz__question">
                    {currentQuestion.question}
                </div>
                {currentQuestion.options.map((e, index) => {
                    const labelClass = userAnswer - 1 === index ? 'card-quiz__option__label--selected' : '';
                    return (
                        <div className='card-quiz__option__anchor' onClick={() => { selectOption(current, index) }} key={index}>
                            <div className={`card-quiz__option__label ${labelClass}`}>{String.fromCharCode(65 + index)}</div>
                            <div className='card-quiz__option__text'>{e}</div>
                        </div>
                    );
                })}
            </div>
        </Card>
    );
};