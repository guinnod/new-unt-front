import { Navigator } from "../../navigator";
import { useDispatch, useSelector } from "react-redux";
import { CardQuiz } from "../../cards/card-quiz";
import { quizActions } from '../../../store/quiz';
import { PageSkeleton } from "../../page-skeleton";
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


    return (
        <PageSkeleton header='working' timeLeft={quiz.timeLeft} countDown={countDown}>
            <div>
                <Navigator userAnswers={quiz.userAnswers} current={current} toQuestion={toQuestion} />
                <CardQuiz currentQuestion={quiz.questions[current]} userAnswer={userAnswers[current]} current={current} selectOption={selectOption} />
            </div>
        </PageSkeleton>
    );

};