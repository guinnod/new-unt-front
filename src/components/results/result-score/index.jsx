import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './result-score.css';
import { useSelector } from 'react-redux';
import { CardDark } from '../../cards/card-dark';
export const ResultScore = ({ score, duration }) => {
    const language = useSelector(state => state.language.value.result);
    return (
        <CardDark>
            <div className='result-score__anchor'>
                <CircularProgressbar
                    value={(score / 35) * 100}
                    text={`${Math.round((score / 35) * 100)}%`}
                    styles={buildStyles({
                        pathColor: ' #00E022 ',
                        trailColor: 'red',
                        textColor: 'white',
                        textSize: 'inherit'
                    })}
                    className='result-score__circle'
                />
                <div className='result-score__text'>{`${language.testingDuration}: ${duration}`}</div>
                <div className='result-score__text'>{`${language.score}: ${score}/45`}</div>
            </div>
        </CardDark>
    );
};