import { useState } from "react";
import { Rules } from "../../pages/rules";
import { Result } from "../../pages/result"
export const UniversalTheory = ({ content }) => {
    const [rules, setRules] = useState(true);
    const [isFinished, setFinish] = useState(false);
    if (rules) {
        return (
            <Rules setRules={setRules} />
        )
    }
    if (!isFinished) {
        return (
            <div>
                {content}
                Theory
                <div onClick={() => { setFinish(true) }} >Complete</div>
            </div>
        );
    }
    if (isFinished) {
        return (<Result score={50} />)
    }
};