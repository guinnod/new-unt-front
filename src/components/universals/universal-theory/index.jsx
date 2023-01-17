import { CardTheory } from "../../cards/card-theory";
import { PageSkeleton } from '../../page-skeleton';
import { LazyImage } from '../../lazy-image';
import { repeat, shuffle } from "../../../media";
import { useDispatch, useSelector } from "react-redux";
import { theoryActions } from "../../../store/theory";
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
    const language = useSelector(state => state.language.value.theory);
    return (
        <PageSkeleton footer={true} header='home'>
            {theory.partEnded ? <div>Part Ended <div onClick={() => {
                dispatch(theoryActions.init());
            }}>Wanna play again?</div></div> :
                <div className="theory__anchor">
                    <div onClick={() => { select("DONT_KNOW"); change("NEXT"); }} className="theory__part theory__part--red">
                        <div className="theory__count theory__count--red  ">{theory.dontKnows}</div>
                        <div className="theory__button theory__button--red">
                            {language.dontKnow}
                        </div>
                        <div className="theory__fill">

                        </div>
                    </div>

                    <CardTheory question={theory.question} answer={theory.answer} />
                    <div onClick={() => { select("KNOW"); change("NEXT"); }} className="theory__part">
                        <div className="theory__count">{theory.knows}</div>
                        <div className="theory__button">
                            {language.know}
                        </div>
                        <div className="theory__fill">

                        </div>
                    </div>
                </div>
            }
            <LazyImage src={shuffle} className='theory__regime' />
            <LazyImage src={repeat} className='theory__regime' />

        </PageSkeleton>
    );
};