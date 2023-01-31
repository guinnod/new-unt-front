import { CardTheory } from "../../../components/card-theory";
import { PageSkeleton } from '../../../components/page-skeleton';
import { useDispatch, useSelector } from "react-redux";
import { theoryActions } from "../../../store/theory";
import { useState } from 'react';
import './universal-theory.css';
import 'react-circular-progressbar/dist/styles.css';
import { TheoryResult } from "../../../pages/theory-result";

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
            {theory.partEnded ?
                <TheoryResult /> :
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