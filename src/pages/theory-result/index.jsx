import { LazyImage } from '../../components/lazy-image';
import { repeat } from "../../media";
import { TopText } from "../../components/top-text";
import { CardDark } from "../../components/cards/card-dark";
import { theoryActions } from "../../store/theory";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import './theory-result.css';
import { useDispatch, useSelector } from 'react-redux';
export const TheoryResult = () => {
    const language = useSelector(state => state.language.value.theory);
    const dispatch = useDispatch();
    const theory = useSelector(state => state.theory);
    const score = theory.knows;
    return (
        <div className="theory-result__anchor">
            <TopText text='Congratulations!' />
            <div className="theory-result__content">
                <CardDark>
                    <div className='theory-result__circle'>
                        <CircularProgressbar
                            value={(score / (theory.knows + theory.dontKnows)) * 100}
                            text={`${Math.round((score / (theory.knows + theory.dontKnows)) * 100)}%`}
                            styles={buildStyles({
                                pathColor: ' #00E022 ',
                                trailColor: 'red',
                                textColor: 'white',
                                textSize: 'inherit'
                            })}
                        />
                    </div>
                    <div>
                        <div className='theory-result__circle__text'>{language.know}:
                            <span className='theory-result__circle__text--score'>{theory.knows}</span></div>
                        <div className='theory-result__circle__text'>{language.dontKnow}:
                            <span className='theory-result__circle__text--score'>{theory.dontKnows}</span></div>
                    </div>
                </CardDark>
                <div>
                    <div onClick={() => {
                        dispatch(theoryActions.init("REPEAT"));
                    }} className='theory-result__buttons button--hovered' >
                        <CardDark>
                            <div>{language.learn}</div>
                            <div className="theory-result__symbol--written">?</div>
                        </CardDark>
                    </div>
                    <div onClick={() => {
                        dispatch(theoryActions.init("ALL"));
                    }} className='theory-result__buttons button--hovered'>
                        <CardDark>
                            <div>{language.repeat}</div>
                            <LazyImage src={repeat} className='theory-result__symbol' />
                        </CardDark>
                    </div>
                </div>
            </div>
        </div>
    );
}