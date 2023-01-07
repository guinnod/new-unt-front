import './top-text.css';

export const TopText = ({ text }) => {
    return (
        <div className='top-text__anchor'>
            <hr />
            <div className='top-text__text'>
                {text}
            </div>
            <hr />
        </div>
    );
};