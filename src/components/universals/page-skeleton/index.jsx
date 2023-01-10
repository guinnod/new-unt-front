import { Footer } from "../../footer";
import { HeaderMain } from "../../header-main";
import { HeaderHome } from "../../header-home";
import { HeaderWorking } from "../../header-working";
import './page-skeleton.css';

export const PageSkeleton = ({ header, footer, children, timeLeft, countDown }) => {
    return (
        <div className='page-skeleton__anchor'>
            {header === 'home' ? <HeaderHome /> : header === 'working' ? <HeaderWorking timeLeft={timeLeft} countDown={countDown} /> : <HeaderMain />}
            <div className='page-skeleton__content'>
                {children}
            </div>
            {footer ? <></> : <Footer />}
        </div>
    );
};