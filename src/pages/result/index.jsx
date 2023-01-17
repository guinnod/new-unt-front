import { useSelector } from 'react-redux';
import { PageSkeleton } from '../../components/page-skeleton';
import { ResultNavigation } from '../../components/results/result-navigation';
import { ResultScore } from '../../components/results/result-score';
import { ResultTopic } from '../../components/results/result-topic';
import { TopText } from '../../components/top-text';
import './result.css';

export const Result = () => {
    const language = useSelector(state => state.language.value.result);
    return (
        <PageSkeleton header='working' footer>
            <TopText text={language.yourResult} />
            <div className='result__anchor'>
                <ResultScore score={28} />
                <ResultTopic topics={['python', 'sql']} />
                <ResultNavigation answers={[1, 2, 4]} />
            </div>
        </PageSkeleton>
    );
};