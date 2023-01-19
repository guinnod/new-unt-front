import './navigator.css';
export const Navigator = ({ userAnswers, current, toQuestion, answers }) => {

    return (
        <div className='navigator__anchor'>
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
                return (<div className={`navigator__block ${className}`}
                    onClick={() => { toQuestion(index) }} key={index}>{index + 1}</div>);
            }) : <></>}
        </div>
    );
};