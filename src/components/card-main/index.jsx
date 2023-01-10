import { NavLink } from 'react-router-dom';
import { LazyImage } from '../lazy-image';
import './card-main.css';
export const CardMain = ({ image, text, path }) => {
    return (

        <div className='card-main__anchor'>
            <NavLink to={path} className='card-main__hover'>
                <div>{text}</div>
            </NavLink>
            <LazyImage src={image} className='card-main__image'/>
        </div>

    );
};