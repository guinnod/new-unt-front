import { useSelector } from 'react-redux';
import { CardDark } from '../../cards/card-dark';
import './result-navigation.css';
export const ResultNavigation = ({ answers }) => {
    const language = useSelector(state => state.language.value.result);

    return (
        <CardDark>
            <div className='result-topic__root'>
                <div>{language.navigation}</div>
                <div className='result-navigation__anchor'>
                    {answers.map((e, index) => {
                        return (<div className={`button--hovered result-navigation__block result-navigation__block--${e.description}`} key={index}>
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