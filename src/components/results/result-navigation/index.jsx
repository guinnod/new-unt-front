import { useSelector } from 'react-redux';
import { ResultCard } from '../result-card';
import './result-navigation.css';
export const ResultNavigation = ({ answers }) => {
    const language = useSelector(state => state.language.value.result);

    return (
        <ResultCard>
            <div>
                <div>{language.navigation}</div>
                <div className='result-navigation__anchor'>
                    {answers.map((e, index) => {
                        const className = 'result-navigation__block';
                        return (<div className={className} key={index}>
                            <div className='result-navigation__number'>
                                {index + 1}
                            </div>
                        </div>);
                    })}
                </div>
            </div>
        </ResultCard>
    );
};