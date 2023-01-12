import { CardTheory } from "../../components/card-theory";
import { PageSkeleton } from '../../components/page-skeleton';
import { LazyImage } from '../../components/lazy-image';
import './universal-theory.css';
import { next, previous, repeat, shuffle } from "../../media";
import { useDispatch, useSelector } from "react-redux";
import { theoryActions } from "../../store/theory";

export const UniversalTheory = () => {
    const theory = useSelector(state => state.theory);
    const dispatch = useDispatch();
    const change = (type) => {
        dispatch(theoryActions.change(type));
    }
    return (
        <PageSkeleton footer={true} header='home'>
            <div className="theory__anchor">
                <div className="theory__part">
                    <div className="theory__button  ">5</div>
                    <LazyImage src={previous} className='theory__navigate' onClick={() => { change("PREVIOUS"); }} />
                    <div className="theory__fill">
                        <LazyImage src={shuffle} className='theory__regime' />
                        <LazyImage src={repeat} className='theory__regime' />
                    </div>
                </div>
                <CardTheory question={theory.question} answer={theory.answer} />
                <div className="theory__part">
                    <div className="theory__button theory__button--red  ">0</div>
                    <LazyImage src={next} className='theory__navigate' onClick={() => { change("NEXT"); }} />
                    <div className="theory__fill">
                    </div>
                </div>
            </div>
        </PageSkeleton>
    );
};