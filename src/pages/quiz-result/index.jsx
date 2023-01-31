import { useSelector } from 'react-redux';
import { PageSkeleton } from '../../components/page-skeleton';
import { ResultNavigation } from '../../components/results/result-navigation';
import { ResultScore } from '../../components/results/result-score';
import { ResultTopic } from '../../components/results/result-topic';
import { TopText } from '../../components/top-text';
import './quiz-result.css';

export const QuizResult = () => {
    const language = useSelector(state => state.language.value.result);
    const answers = useSelector(state => state.quiz.answers);
    return (
        <PageSkeleton className='quiz-result__root' header='working' timeLeft={0} footer>
            <TopText text={language.yourResult} />
            <div className='quiz-result__anchor'>
                <ResultScore score={20} />
                <ResultTopic topics={['python', 'sql']} />
                <ResultNavigation answers={answers} />
            </div>
        </PageSkeleton>
    );
};