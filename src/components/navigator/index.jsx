import { useSelector } from 'react-redux';
import './navigator.css';
export const Navigator = ({ userAnswers }) => {
    const current = useSelector(state => state.quizActions.current);

    return (
        <div className='navigator__anchor'>
            {userAnswers.map((e, index) => {
                const className = current === index ? 'navigator__block--active' : e !== 0 ? 'navigator__block--selected' : '';
                return (<div className={`navigator__block ${className}`} key={index}>{index + 1}</div>);
            })}
        </div>
    );
};