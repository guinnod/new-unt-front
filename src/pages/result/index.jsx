import { useSelector } from 'react-redux';
import { PageSkeleton } from '../../components/page-skeleton';
import { ResultNavigation } from '../../components/results/result-navigation';
import { ResultScore } from '../../components/results/result-score';
import { ResultTopic } from '../../components/results/result-topic';
import { TopText } from '../../components/top-text';
import './result.css';

export const Result = () => {
    const language = useSelector(state => state.language.value.result);
    const answers = useSelector(state => state.quiz.answers);
    return (
        <PageSkeleton className='result__root' header='working' footer>
            <TopText text={language.yourResult} />
            <div className='result__anchor'>
                <ResultScore score={20} />
                <ResultTopic topics={['python', 'sql']} />
                <ResultNavigation answers={answers} />
            </div>
        </PageSkeleton>
    );
};