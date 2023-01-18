import { useSelector } from 'react-redux';
import { Activity } from '../../components/activity';
import { LazyImage } from '../../components/lazy-image';
import { PageSkeleton } from '../../components/page-skeleton';
import './profile.css';

export const Profile = () => {
    const language = useSelector(state => state.language.value.profile);
    const auth = useSelector(state => state.auth);
    return (
        <PageSkeleton header={'home'}>
            <div className='profile__anchor'>
                <div className='profile__sidebar'>
                    <LazyImage src={auth.profilePhoto} alt='user' className='profile__photo' />
                    <p>{language.username}: {auth.username}</p>
                    <p>{language.name}: {auth.name}</p>
                    <p>{language.max}: {auth.maxScore}</p>
                </div>
                <div>
                    <Activity />
                    <div>

                    </div>
                </div>
            </div>
        </PageSkeleton>
    );
};