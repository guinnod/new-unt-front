import { useSelector } from 'react-redux';
import { calculator, headphones } from '../../media';
import { Header } from '../universals/header';

import './header-working.css';


export const HeaderWorking = () => {
   const language = useSelector((state)=> {
    return state.language.value;
   });
    return (
        <Header right={
            <div>
                <div className='header__button header-working__time'>01:49:13</div>
                <div className='header__button header__button--pink'>{language.quizHeader.finish}</div>
                <img className='header-working__image' src={calculator} alt="calculator" />
                <img className='header-working__image' src={headphones} alt="headphones" />
            </div>
        } />
    );
};