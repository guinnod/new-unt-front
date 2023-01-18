import { useSelector } from 'react-redux';
import { CardDark } from '../../cards/card-dark';
import './result-navigation.css';
export const ResultNavigation = ({ answers }) => {
    const language = useSelector(state => state.language.value.result);

    return (
        <CardDark>
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
        </CardDark>
    );
};