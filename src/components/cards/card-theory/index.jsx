import { useState } from 'react';
import './card-theory.css';
export const CardTheory = ({ question, answer }) => {
    
    const [flip, setFlip] = useState(true);
    return (
        <div className={flip ? 'card-theory__root' : 'card-theory__root card-theory__anchor--flipped'}
            onClick={() => {
                setFlip(!flip);
            }}>
            <div className='card-theory__anchor'>
                <div className="card-theory__text">
                    {question}
                </div>
            </div>
            <div className='card-theory__anchor card-theory__anchor--flipped card-theory__anchor--back'>
                <div>{answer}</div>
            </div>
        </div>
    );
};