import { useSelector } from 'react-redux';
import { CardDark } from '../../cards/card-dark';
import './result-topic.css';
export const ResultTopic = ({ topics }) => {

    const language = useSelector(state => state.language.value.result);
    return (
        <CardDark>
            <div className='result-topic__root'>
                <div>{language.topics}:</div>
                <div className='result-topic__anchor'>
                    {topics.map((e, index) => {
                        return (<div className='result-topic__block' key={index}>{e}</div>);
                    })}
                </div>
            </div>
        </CardDark> 
    );
};