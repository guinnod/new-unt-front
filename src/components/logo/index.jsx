import logo from '../../media/logo.png';
import { Link } from 'react-router-dom';
import './logo.css';
export const Logo = () => {

    return (
        <Link to='/home'>
            <div className='logo__anchor'>
                <img src={logo} alt="logo" className='logo__img' />
                <div className='logo__text'>UNT Informatics</div>
            </div>
        </Link>
    );
};