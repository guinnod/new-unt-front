import { useState } from "react";
import { Rules } from "../../../pages/rules";
import { Result } from "../../../pages/result"
import { Navigator } from "../../navigator";
import { useDispatch, useSelector } from "react-redux";
import { CardQuiz } from "../../card-quiz";
import { quizActionsActions } from '../../../store/quiz/quizActions';

export const UniversalTestingContent = ({ content }) => {
    const [rules, setRules] = useState(true);
    const [isFinished, setFinish] = useState(false);
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
    if (!rules) {
        return (
            <Rules setRules={setRules} />
        )
    }
    if (!isFinished) {
        return (
            <div>
                {content}
                Testing
                <Navigator userAnswers={quizActions.userAnswers} current={current} toQuestion={toQuestion} />
                <CardQuiz currentQuestion={quizActions.questions[current]} userAnswer={userAnswers[current]} current={current} selectOption={selectOption} />
                <div onClick={() => { setFinish(true) }} >Complete</div>
            </div>
        );
    }
    if (isFinished) {
        return (<Result score={50} />)
    }
};