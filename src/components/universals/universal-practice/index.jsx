import { useDispatch, useSelector } from "react-redux";
import { Card } from "../../cards/card";
import { Navigator } from "../../navigator";
import { PageSkeleton } from "../../page-skeleton";
import { practiceActions } from "../../../store/practice";
import './universal-practice.css';
import { LazyImage } from "../../lazy-image";
import { next, previous } from "../../../media";



export const UniversalPractice = ({ link }) => {
    const practice = useSelector(state => state.practice);
    const dispatch = useDispatch();
    const toQuestion = (index) => {
        dispatch(practiceActions.toQuestion(index));
    }

    return (
        <PageSkeleton header='working' footer className='practice__anchor' timeLeft={40}>
            <Navigator userAnswers={practice.questions} toQuestion={toQuestion} current={practice.current} />
            <div className="practice__content__root">
                <LazyImage src={previous} className='practice__content__button' />
                <div className="practice__content">
                    <Card>
                        {practice.questions[practice.current].question}
                    </Card>
                    <iframe src={link} className='practice__iframe'></iframe>
                </div>
                <LazyImage src={next} className='practice__content__button' />
            </div>
        </PageSkeleton>
    );
};