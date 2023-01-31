import { useDispatch, useSelector } from "react-redux";
import { Card } from "../../../components/cards/card";
import { Navigator } from "../../../components/navigator";
import { PageSkeleton } from "../../../components/page-skeleton";
import { practiceActions } from "../../../store/practice";
import './universal-practice.css';
import { LazyImage } from "../../../components/lazy-image";
import { next, previous } from "../../../media";



export const UniversalPractice = ({ link }) => {
    const practice = useSelector(state => state.practice);
    const dispatch = useDispatch();
    const toQuestion = (index) => {
        dispatch(practiceActions.toQuestion(index));
    }

    return (
        <PageSkeleton header='working' footer className='practice__anchor' timeLeft={0}>
            <Navigator userAnswers={practice.questions} toQuestion={toQuestion} current={practice.current} />
            <div className="practice__content__root">
                <LazyImage onClick={() => {
                    toQuestion(practice.current - 1);
                }} src={previous} className='button--hovered practice__content__button' />
                <div className="practice__content">
                    <Card>
                        {practice.questions[practice.current].question}
                    </Card>
                    <iframe src={link} className='practice__iframe' title="practice"></iframe>
                </div>
                <LazyImage onClick={() => {
                    toQuestion(practice.current + 1);
                }} src={next} className='button--hovered practice__content__button' />
            </div>
        </PageSkeleton>
    );
};