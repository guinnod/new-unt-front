import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { languageActions } from '../../../store/language';
import { Header } from '../header';
import './header-main.css';


export const HeaderMain = () => {
    const language = useSelector((state) => {
        return state.language;
    });

    const dispatch = useDispatch();
    const changeLanguage = () => {
        dispatch(languageActions.change());
    };


    return (
        <Header right={
            <div>
                <Link to='/home'>
                    <div className='header__button header__button--pink'>{language.value.headerMain.trialExam}</div>
                </Link>
                <div className='header__button header-main__resources'>{language.value.headerMain.resources}</div>
                <img className='header-main__flag' src={language.flag} alt="flag" onClick={changeLanguage} />
            </div>
        } />
    );
};