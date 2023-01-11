import { Logo } from '../logo';
import './header.css';
export const Header = ({ left, right }) => {
    return (
        <div className='header__anchor'>
            <div className='header__part'>
                <Logo />
                {left}
            </div>
            <div className='header__part'>
                {right}
            </div>
        </div>
    );
};