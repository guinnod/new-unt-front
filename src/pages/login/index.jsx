import { useSelector } from 'react-redux';
import { PageSkeleton } from '../../components/page-skeleton';
import { google } from '../../media';
import './login.css';

export const Login = () => {
    const language = useSelector((state) => state.language.value.login);
    return (
        <PageSkeleton>
            <div className='login__anchor'>
                <div className='login__text'>
                    <div className='login__text--big'>{language.goodPlatform2}</div>
                    <div className='login__text--big login__text--big--yellow'>{language.goodPlatform}</div>
                    <div className='login__text--medium'>{language.prepareTo}</div>
                    <ul>
                        <li>{language.takingExams}</li>
                        <li>{language.practicing}</li>
                        <li>{language.learning}</li>
                    </ul>
                </div>
                <div className="login__card">
                    <input type="text" id="username" placeholder={language.username} />
                    <input type="text" id="nameOfSchool" placeholder={language.nameOfSchool} />
                    <div className='login__card__button'><img src={google} alt='google' /> <div>{language.signUp}</div></div>
                    <div className='login__card__text'>{language.alreadyHave}</div>
                    <div className='login__card__button'><img src={google} alt='google' /> <div>{language.signIn}</div></div>
                </div>
            </div>
        </PageSkeleton>
    );
};