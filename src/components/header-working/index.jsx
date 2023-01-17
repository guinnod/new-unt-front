import { useState } from 'react';
// import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { calculator, headphones } from '../../media';
import Calculator from '../calculator';
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
    const [showCalculator, setShowCalculator] = useState(false);
    // useEffect(() => {
    //     setTimeout(() => {
    //         countDown();
    //     }, 1000);
    // }, [timeLeft]);
    const changePosition = (event) => {
        const element = document.getElementById('calculator');
        let shiftX = event.clientX - element.getBoundingClientRect().left;
        let shiftY = event.clientY - element.getBoundingClientRect().top;
        moveAt(event.pageX, event.pageY);
        function moveAt(pageX, pageY) {
            element.style.left = pageX - shiftX + 'px';
            element.style.top = pageY - shiftY + 'px';
        }
        function onMouseMove(event) {
            moveAt(event.pageX, event.pageY);
        }
        document.addEventListener('mousemove', onMouseMove);
        element.onmouseup = function () {
            document.removeEventListener('mousemove', onMouseMove);
            element.onmouseup = null;
        };
    }
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
                <div>
                    <img className='header-working__image' src={calculator} alt="calculator" onClick={() => { setShowCalculator(!showCalculator) }} />
                    <div id='calculator' className='header-working__calculator' onMouseDown={(event) => { changePosition(event) }}>
                        {showCalculator ?
                            <Calculator />
                            : <></>}
                    </div>
                </div>
                <img className='header-working__image' src={headphones} alt="headphones" />
            </div>
        } />
    );
};