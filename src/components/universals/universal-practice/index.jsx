import { useDispatch, useSelector } from "react-redux";
import { Card } from "../../cards/card";
import { Navigator } from "../../navigator";
import { PageSkeleton } from "../../page-skeleton";
import { practiceActions } from "../../../store/practice";
import './universal-practice.css';



export const UniversalPractice = ({ link }) => {
    const practice = useSelector(state => state.practice);
    const dispatch = useDispatch();
    const toQuestion = (index) => {
        dispatch(practiceActions.toQuestion(index));
    }

    return (
        <PageSkeleton header='working' footer className='practice__anchor'>
            <Navigator userAnswers={practice.questions} toQuestion={toQuestion} current={practice.current} />
            <div className="practice__content">
                <Card>
                    {practice.questions[practice.current].question}
                </Card>
                <iframe src={link} style={{ width: '800px', height: '600px' }}></iframe>
            </div>
        </PageSkeleton>
    );
};