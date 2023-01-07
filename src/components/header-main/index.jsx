import { useContext } from 'react';
import { DefaultContext } from '../../Context';
import { Header } from '../universals/header';
import './header-main.css';


export const HeaderMain = () => {
    const {language, flag} = useContext(DefaultContext);
    return (
        <Header right={
            <div>
                <div className='header__button header__button--pink'>{language.headerMain.trialExam}</div>
                <div className='header__button'>{language.headerMain.resources}</div>
                <img className='header-main__flag' src={flag} alt="flag" />
            </div>
        }/>
    );
};