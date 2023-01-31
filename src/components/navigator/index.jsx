import { useEffect } from 'react';
import './navigator.css';
export const Navigator = ({ userAnswers, current, toQuestion, answers }) => {
    useEffect(() => {
        const navigator = document.getElementById('navigator');
        const blockWidth = document.getElementsByClassName('navigator__block')[0].clientWidth;
        navigator.scroll(blockWidth * current, 0);
    }, [current]);

    return (
        <div className='navigator__anchor' id='navigator'>
            {userAnswers ? userAnswers.map((e, index) => {
                let className = '';
                if (current === index) {
                    className = 'navigator__block--active';
                } else if (e.length > 0) {
                    className = 'navigator__block--selected';
                }
                if (answers) {
                    className = 'navigator__block--' + answers[index].description;
                    if (current === index) {
                        className += ' navigator__block--active--checking';
                    }
                }
                return (<div className={`button--hovered navigator__block ${className}`}
                    onClick={() => { toQuestion(index) }} key={index}>{index + 1}</div>);
            }) : <></>}
        </div>
    );
};