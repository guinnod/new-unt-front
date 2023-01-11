import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { calculator, headphones } from '../../media';
import { Header } from '../header';
import './header-working.css';


export const HeaderWorking = ({ timeLeft, countDown }) => {
    const language = useSelector((state) => {
        return state.language.value;
    });
    const time = {
        hours: Math.floor(timeLeft / (1000 * 60 * 60)),
        minutes: Math.floor((timeLeft / 1000 / 60) % 60),
        seconds: Math.floor((timeLeft / 1000) % 60),
    }
    useEffect(() => {
        setTimeout(() => {
            countDown();
        }, 1000);
    });
    return (
        <Header right={
            <div>
                <div className='header__button header-working__time'>
                    {time.hours < 10 ? `0${time.hours}` : time.hours}
                    :
                    {time.minutes < 10 ? `0${time.minutes}` : time.minutes}
                    :
                    {time.seconds < 10 ? `0${time.seconds}` : time.seconds}
                </div>
                <div className='header__button header__button--pink'>{language.quizHeader.finish}</div>
                <img className='header-working__image' src={calculator} alt="calculator" />
                <img className='header-working__image' src={headphones} alt="headphones" />
            </div>
        } />
    );
};