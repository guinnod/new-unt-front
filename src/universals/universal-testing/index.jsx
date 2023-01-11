import { Navigator } from "../../components/navigator";
import { useDispatch, useSelector } from "react-redux";
import { CardQuiz } from "../../components/card-quiz";
import { quizActionsActions } from '../../store/quizActions';
import { PageSkeleton } from "../../components/page-skeleton";
export const UniversalTesting = () => {

    const quizActions = useSelector(state => state.quizActions);
    const current = quizActions.current;
    const userAnswers = quizActions.userAnswers;
    const dispatch = useDispatch();
    const toQuestion = (index) => {
        dispatch(quizActionsActions.toQuestion(index));
    };
    const selectOption = (index, option) => {
        dispatch(quizActionsActions.selectOption({ index, option }));
    }
    const countDown = () => {
        dispatch(quizActionsActions.countDown());
    }


    return (
        <PageSkeleton header='working' timeLeft={quizActions.timeLeft} countDown={countDown}>
            <div>
                <Navigator userAnswers={quizActions.userAnswers} current={current} toQuestion={toQuestion} />
                <CardQuiz currentQuestion={quizActions.questions[current]} userAnswer={userAnswers[current]} current={current} selectOption={selectOption} />
            </div>
        </PageSkeleton>
    );

};