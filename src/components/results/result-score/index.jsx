import { ResultCard } from '../result-card';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './result-score.css';
import { useSelector } from 'react-redux';
export const ResultScore = ({ score, duration }) => {
    const language = useSelector(state => state.language.value.result);

    return (
        <ResultCard>
            <div className='result-score__anchor'>
                <CircularProgressbar
                    value={(score / 35) * 100}
                    text={`${(score / 35).toFixed(2) * 100}%`}
                    styles={buildStyles({
                        pathColor: ' #00E022 ',
                        trailColor: 'red',
                        textColor: 'white',
                        textSize: 'inherit'
                    })}
                    className='result-score__circle'
                />
                <div>{`${language.testingDuration}: ${duration}`}</div>
                <div>{`${language.score}: ${score}/45`}</div>
            </div>
        </ResultCard>
    );
};