import { CardTheory } from "../../cards/card-theory";
import { PageSkeleton } from '../../page-skeleton';
import { LazyImage } from '../../lazy-image';
import { repeat, shuffle } from "../../../media";
import { useDispatch, useSelector } from "react-redux";
import { theoryActions } from "../../../store/theory";
import { useState } from 'react';
import './universal-theory.css';

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
    return (
        <PageSkeleton footer={true} header='home'>
            {theory.partEnded ? <div>Part Ended <div onClick={() => {
                dispatch(theoryActions.init());
            }}>Wanna play again?</div>
                <LazyImage src={shuffle} className='theory__regime' />
                <LazyImage src={repeat} className='theory__regime' />
            </div> :
                <div className="theory__anchor">
                    <div onClick={() => { userSelect("DONT_KNOW") }} className="theory__part theory__part--red">
                        <div className="theory__count theory__count--red  ">{theory.dontKnows}</div>
                        <div className="theory__button theory__button--red">
                            {language.dontKnow}
                        </div>
                        <div className="theory__fill">

                        </div>
                    </div>

                    <CardTheory flip={flip} setFlip={setFlip} question={theory.question} answer={theory.answer} />
                    <div onClick={() => { userSelect("KNOW") }} className="theory__part">
                        <div className="theory__count">{theory.knows}</div>
                        <div className="theory__button">
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