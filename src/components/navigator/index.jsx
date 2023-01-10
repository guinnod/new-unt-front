import './navigator.css';
export const Navigator = ({ userAnswers, current, toQuestion }) => {

    return (
        <div className='navigator__anchor'>
            {userAnswers.map((e, index) => {
                let className = '';
                if (current === index) {
                    className = 'navigator__block--active';
                } else if (e.length > 0) {
                    className = 'navigator__block--selected';
                }
                return (<div className={`navigator__block ${className}`}
                    onClick={() => { toQuestion(index) }} key={index}>{index + 1}</div>);
            })}
        </div>
    );
};