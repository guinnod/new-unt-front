import './card.css';

export const Card = ({children}) => {
    return (
        <div className='card__anchor'>
            {children}
        </div>
    );
};