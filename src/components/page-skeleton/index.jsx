import { Footer } from "../footer";
import { HeaderMain } from "../headers/header-main";
import { HeaderHome } from "../headers/header-home";
import { HeaderWorking } from "../headers/header-working";
import './page-skeleton.css';

export const PageSkeleton = ({ header, footer, children, timeLeft, countDown }) => {
    return (
        <div className='page-skeleton__anchor'>
            <div>
                {header === 'home' ? <HeaderHome /> : header === 'working' ? <HeaderWorking timeLeft={timeLeft} countDown={countDown} /> : <HeaderMain />}
                <div className='page-skeleton__content'>
                    {children}
                </div>
            </div>
            {footer ? <></> : <Footer />}
        </div>
    );
};