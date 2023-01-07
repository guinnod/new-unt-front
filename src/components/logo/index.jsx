import './logo.css';
import logo from '../../media/logo.png';
import { NavLink } from 'react-router-dom';
export const Logo = () => {

    return (
        <NavLink to='/home' className='logo__link'>
            <div className='logo__anchor'>
                <img src={logo} alt="logo" className='logo__img' />
                <div className='logo__text'>UNT Informatics</div>
            </div>
        </NavLink>
    );
};