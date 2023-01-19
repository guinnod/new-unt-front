import { useSelector } from 'react-redux';
import { CardDark } from '../cards/card-dark';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './activity.css';
export const Activity = ({ maxSolved, solved, types }) => {
    const language = useSelector(state => state.language.value.profile);

    return (
        <CardDark>
            <div className='activity__anchor'>
                <div>
                    <CircularProgressbar
                        value={(solved / maxSolved.overall) * 100}
                        styles={buildStyles({
                            pathColor: ' #EC008C',
                        })}
                    />
                    <div className='activity__circle__text'>
                        <div>
                            {solved}
                        </div>
                        <div>
                            {language.solved}
                        </div>
                    </div>
                </div>
                <div>
                    {types ? types.map((e, index) => {
                        return (
                            <div key={index}>
                                <div>{e.text} <span>{e.value}/{e.maxValue}</span> </div>
                                <progress className={`activity__progress ${e.className}`} value={e.value} max={e.maxValue}></progress>
                            </div>
                        );
                    }) : <></>}
                </div>
            </div>
        </CardDark>
    );
};