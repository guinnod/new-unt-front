import './result-card.css';
export const ResultCard = ({ children }) => {
    return (
        <div className='result-card__anchor'>
            {children}
        </div>
    );
};