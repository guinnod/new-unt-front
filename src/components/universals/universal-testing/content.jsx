import { useState } from "react";
import { Rules } from "../../../pages/rules";
import { Result } from "../../../pages/result"
import { Navigator } from "../../navigator";
import { useSelector } from "react-redux";

export const UniversalTestingContent = ({ content }) => {
    const [rules, setRules] = useState(true);
    const [isFinished, setFinish] = useState(false);
    const userAnswers = useSelector(state => state.quizActions.userAnswers);

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
                <Navigator userAnswers={userAnswers} />
                <div onClick={() => { setFinish(true) }} >Complete</div>
            </div>
        );
    }
    if (isFinished) {
        return (<Result score={50} />)
    }
};