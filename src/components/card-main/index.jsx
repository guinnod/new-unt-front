import { NavLink } from 'react-router-dom';
import './card-main.css';
export const CardMain = ({ image, text, path }) => {
    return (

        <div className='card-main__anchor'>
            <NavLink to={path} className='card-main__hover'>
                <div>{text}</div>
            </NavLink>
            <img className='card-main__image' src={image} alt={text} />
        </div>

    );
};