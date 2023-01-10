import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Card } from '../card';
import './card-theory.css';
export const CardTheory = () => {
    const language = useSelector(state => state.language.value.theory);
    const [flip, setFlip] = useState(true);
    return (
        <div className={flip ? 'card-theory__root' : 'card-theory__root card-theory__anchor--flipped'}
            onClick={() => { if (!flip) { setFlip(true) } }}>
                <div className='card-theory__anchor'>
                    <div className="card-theory__text">
                    </div>
                    <div className="card-theory__buttons">
                        <div onClick={() => { setFlip(false) }} className="theory__button">
                            {language.know}
                        </div>
                        <div className="theory__button theory__button--red">
                            {language.dontKnow}
                        </div>
                    </div>
                </div>
                <div style={{position: 'absolute', top: 0}} className='card-theory__anchor card-theory__anchor--flipped'>
                    <div>Back Side</div> 
                </div>
        </div>
    );
};