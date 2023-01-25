import { Card } from '../card';
import { LazyImage } from '../../lazy-image';
import './card-quiz.css';
export const CardQuiz = ({ currentQuestion, userAnswer, current, selectOption, answers }) => {

    const isDivided = currentQuestion.task !== "" || currentQuestion.content !== "" || currentQuestion.taskContent !== "";

    const questionPart = <>
        {currentQuestion.taskContent ? <LazyImage className='card-quiz__image' src={currentQuestion.taskContent} /> : <></>}
        {currentQuestion.task ? <div className="card-quiz__question">
            {currentQuestion.task}
        </div> : <></>}
        {currentQuestion.content ? <LazyImage className='card-quiz__image' src={currentQuestion.content} /> : <></>}
    </>;
    
    const optionPart = <>
        <div className="card-quiz__question">
            {currentQuestion.question}
        </div>
        {currentQuestion.options.map((e, index) => {
            const labelClass = userAnswer.includes(index) ? 'card-quiz__option__label--selected' : '';
            let backgroundOption = '';
            if (answers) {
                if (answers[current].value.includes(index)) {
                    backgroundOption = 'card-quiz__option--correct';
                    if (userAnswer.includes(index)) {
                        backgroundOption += ' card-quiz__option--correct--user'
                    }
                } else if (userAnswer.includes(index)) {
                    backgroundOption = 'card-quiz__option--incorrect';
                }
            }
            return (
                <div className={`card-quiz__option__anchor ${backgroundOption}`} onClick={() => { if (!answers) { selectOption(current, index); } }} key={index}>
                    <div className={`card-quiz__option__label ${labelClass}`}>{String.fromCharCode(65 + index)}</div>
                    <div className='card-quiz__option__text'>{e}</div>
                </div>
            );
        })}
    </>;
    if (isDivided) {
        return (
            <div className='card-quiz__root card-quiz__root--flex'>
                <div className='card-quiz__part--question'>
                    <Card>
                        <div className='card-quiz__anchor'>
                            {questionPart}
                        </div>
                    </Card>
                </div>
                <div className='card-quiz__part--option'>
                    <Card>
                        <div className='card-quiz__anchor '>
                            {optionPart}
                        </div>
                    </Card>
                </div>
            </div>
        );
    }

    return (
        <div className='card-quiz__root'>
            <Card>
                <div className='card-quiz__anchor'>
                    {questionPart}
                    {optionPart}
                </div>
            </Card>
        </div>
    );
};