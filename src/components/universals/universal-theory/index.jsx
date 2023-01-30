import { CardTheory } from "../../cards/card-theory";
import { PageSkeleton } from '../../page-skeleton';
import { LazyImage } from '../../lazy-image';
import { repeat } from "../../../media";
import { useDispatch, useSelector } from "react-redux";
import { theoryActions } from "../../../store/theory";
import { useState } from 'react';
import './universal-theory.css';
import { TopText } from "../../top-text";
import { CardDark } from "../../cards/card-dark";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export const UniversalTheory = () => {
    const theory = useSelector(state => state.theory);
    const dispatch = useDispatch();
    const change = (type) => {
        dispatch(theoryActions.change(type));
    }
    const select = (type) => {
        dispatch(theoryActions.select(type));
    }
    const [flip, setFlip] = useState(true);

    const language = useSelector(state => state.language.value.theory);
    const userSelect = (type) => {
        if (flip) {
            select(type);
            change("NEXT");
            return;
        }

        setFlip(true);
        setTimeout(() => {
            select(type);
            change("NEXT");
        }, 1050);

    }
    const score = theory.knows;
    return (
        <PageSkeleton footer={true} header='home'>
            {!theory.partEnded ?
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
                                    <div>Learn unkown termins</div>
                                    <div className="theory-result__symbol--written">?</div>
                                </CardDark>
                            </div>
                            <div onClick={() => {
                                dispatch(theoryActions.init("ALL"));
                            }} className='theory-result__buttons button--hovered'>
                                <CardDark>
                                    <div>Repeat all again</div>
                                    <LazyImage src={repeat} className='theory-result__symbol' />
                                </CardDark>
                            </div>
                        </div>
                    </div>
                </div> :
                <div className="theory__anchor">
                    <div onClick={() => { if (window.innerWidth > 850) { userSelect("DONT_KNOW"); } }} className="theory__part theory__part--red">
                        <div className="theory__count theory__count--red  ">{theory.dontKnows}</div>
                        <div className="theory__button theory__button--red" onClick={() => { userSelect("DONT_KNOW"); }}>
                            {language.dontKnow}
                        </div>

                        <div className="theory__fill">

                        </div>
                    </div>

                    <CardTheory flip={flip} setFlip={setFlip} question={theory.question} answer={theory.answer} userSelect={userSelect} />
                    <div onClick={() => { if (window.innerWidth > 850) { userSelect("KNOW"); } }} className="theory__part">
                        <div className="theory__count">{theory.knows}</div>
                        <div className="theory__button" onClick={() => { userSelect("KNOW"); }}>
                            {language.know}
                        </div>

                        <div className="theory__fill">

                        </div>
                    </div>
                </div>
            }
        </PageSkeleton>
    );
};