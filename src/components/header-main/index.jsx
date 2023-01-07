import { useDispatch, useSelector } from 'react-redux';
import { languageActions } from '../../store/language';
import { Header } from '../universals/header';
import './header-main.css';


export const HeaderMain = () => {
    const language = useSelector((state)=>{
        return state.language.value;
    });
    const flag = useSelector((state)=> {
        return state.language.flag;
    });
    const dispatch = useDispatch();
    const changeLanguage = () => {
        dispatch(languageActions.change());
    };
    
    
    return (
        <Header right={
            <div>
                <div className='header__button header__button--pink'>{language.headerMain.trialExam}</div>
                <div className='header__button'>{language.headerMain.resources}</div>
                <img className='header-main__flag' src={flag} alt="flag" onClick={changeLanguage}/>
            </div>
        }/>
    );
};