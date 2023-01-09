import './navigator.css';
export const Navigator = ({ userAnswers, current, toQuestion }) => {
    
    return (
        <div className='navigator__anchor'>
            {userAnswers.map((e, index) => {
                const className = current === index ? 'navigator__block--active' : e !== 0 ? 'navigator__block--selected' : '';
                return (<div className={`navigator__block ${className}`} onClick={() => { toQuestion(index) }} key={index}>{index + 1}</div>);
            })}
        </div>
    );
};