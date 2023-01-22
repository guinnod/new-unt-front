import { useNavigate } from 'react-router-dom';
import { TopText } from '../../top-text';
import { PageSkeleton } from '../../page-skeleton';
import { LazyImage } from '../../lazy-image';
import './universal-pages.css';
export const UniversalPages = ({ content }) => {
    let navigate = useNavigate();

    async function toPage(path) {
        navigate(`./${path}`, { replace: false });
    }

    return (
        <PageSkeleton header='home'>
            <TopText text={content.title} />
            <div className='universal-pages__anchor'>
                {content.subtypes.map(({ path, text, subText, src }) => (
                    <div className='universal-pages__card' key={path} onClick={() => { toPage(path) }}>
                        <LazyImage className='universal-pages__image' src={src} alt={text} />
                        <div className='universal-pages__bottom'>
                            <div>{text}</div>
                            <div className='universal-pages__text--sub'>{subText}</div>
                        </div>
                    </div>
                ))}
            </div>
        </PageSkeleton>
    );
};