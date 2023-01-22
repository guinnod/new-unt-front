import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { CardDark } from '../../components/cards/card-dark';
import { LazyImage } from '../../components/lazy-image';
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
                <CardDark>
                    <div className="login__card">
                        <input type="text" id="username" placeholder={language.username} />
                        <input type="text" id="nameOfSchool" placeholder={language.nameOfSchool} />
                        <Link to='/home'>
                            <div className='login__card__button'><LazyImage src={google} alt='google' /> <div>{language.signUp}</div></div>
                        </Link>
                        <div className='login__card__text'>{language.alreadyHave}</div>
                        <Link to='/home'>
                            <div className='login__card__button'><LazyImage src={google} alt='google' /> <div>{language.signIn}</div></div>
                        </Link>
                    </div>
                </CardDark>
            </div>
        </PageSkeleton>
    );
};