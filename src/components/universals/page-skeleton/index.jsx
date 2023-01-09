import { Footer } from "../../footer";
import { HeaderMain } from "../../header-main";
import { HeaderHome } from "../../header-home";
import { HeaderWorking } from "../../header-working";
import './page-skeleton.css';

export const PageSkeleton = ({ header, footer, children }) => {
    return (
        <div className='page-skeleton__anchor'>
            {header === 'home' ? <HeaderHome /> : header === 'working' ? <HeaderWorking /> : <HeaderMain />}
            <div className='page-skeleton__content'>
            {children}
            </div>
            {footer ? <Footer /> : <></>}
        </div>
    );
};