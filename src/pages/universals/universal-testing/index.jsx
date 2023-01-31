import { Navigator } from "../../../components/navigator";
import { useDispatch, useSelector } from "react-redux";
import { CardQuiz } from "../../../components/card-quiz";
import { quizActions } from '../../../store/quiz';
import { PageSkeleton } from "../../../components/page-skeleton";
import { LazyImage } from "../../../components/lazy-image";
import { next, previous } from "../../../media";
import './universal-testing.css';
export const UniversalTesting = () => {

    const quiz = useSelector(state => state.quiz);
    const current = quiz.current;
    const userAnswers = quiz.userAnswers;
    const dispatch = useDispatch();
    const toQuestion = (index) => {
        dispatch(quizActions.toQuestion(index));
    };
    const selectOption = (index, option) => {
        dispatch(quizActions.selectOption({ index, option }));
    }
    const countDown = () => {
        dispatch(quizActions.countDown());
    }

    const answers = quiz.answers;

    return (
        <div className="page-skeleton__root">
            <PageSkeleton header='working' timeLeft={quiz.timeLeft} countDown={countDown} footer>
                <div className="testing__root">
                    <LazyImage src={previous} className={`button--hovered testing__button ${current === 0 ? 'testing__button--disabled' : ''}`} onClick={() => { toQuestion(current - 1); }} />
                    <div className="testing__anchor">
                        <CardQuiz currentQuestion={quiz.questions[current]} userAnswer={userAnswers[current]} current={current} selectOption={selectOption} />
                    </div>
                    <LazyImage src={next} className={`button--hovered testing__button testing__button--right ${current === quiz.questions.length - 1 ? 'testing__button--disabled' : ''}`}
                        onClick={() => { toQuestion(current + 1); }} />
                </div>
                <Navigator userAnswers={quiz.userAnswers} current={current} toQuestion={toQuestion} />
            </PageSkeleton>
        </div>
    );

};