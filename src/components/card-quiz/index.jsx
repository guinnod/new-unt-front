import { Card } from '../card';
import { LazyImage } from '../lazy-image';
import './card-quiz.css';
export const CardQuiz = ({ currentQuestion, userAnswer, current, selectOption }) => {
    return (
        <Card>
            <div className='card-quiz__anchor'>
                <LazyImage src={currentQuestion.content} />
                <div className="card-quiz__question">
                    {currentQuestion.question}
                </div>
                <LazyImage src={currentQuestion.taskContent} />
                <div className="card-quiz__question">
                    {currentQuestion.task}
                </div>
                {currentQuestion.options.map((e, index) => {
                    const labelClass = userAnswer.includes(index) ? 'card-quiz__option__label--selected' : '';
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