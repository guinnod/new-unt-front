import { useSelector } from 'react-redux';
import { PageSkeleton } from '../../components/page-skeleton';
import { TopText } from '../../components/top-text';
import './additional.css'
export const Additional = () => {
    const language = useSelector(state => state.language.value.additional);
    const firstInputs = [
        {
            placeholder: language.question,
            name: 'question',
        }, {
            placeholder: language.answer,
            name: 'answer',
        }, {
            placeholder: `1 ${language.option}`,
            name: 'option1',
        }, {
            placeholder: `2 ${language.option}`,
            name: 'option2',
        },
        {
            placeholder: `3 ${language.option}`,
            name: 'option3',
        },
        {
            placeholder: `4 ${language.option}`,
            name: 'option4',
        }
    ];
    const thirdInputs = [
        {
            placeholder: `6 ${language.option}`,
            name: 'option6',
        }, {
            placeholder: `7 ${language.option}`,
            name: 'option7',
        },
        {
            placeholder: `8 ${language.option}`,
            name: 'option8',
        }
    ];

    const showFileName = (id, forId) => {
        let path = document.getElementById(id).files[0];
        console.log(path.name);
        document.getElementById(forId).placeholder = path.name;
    }
    return (
        <PageSkeleton header='home'>
            <TopText text={language.addQuestion} />
            <div className="additional__root">
                <div className='additional__anchor'>
                    <div>{language.sentence}</div>
                    <form action="" method="post">
                        <div className='additional__part'>
                            <div>
                                {firstInputs.map((e, index) => {
                                    return (<input type="text" name={e.name} id={e.name} key={index} placeholder={e.placeholder} className='additional__input' />);
                                })}
                            </div>
                            <div>
                                <textarea name="context" id="context" placeholder={language.context} className='additional__input'></textarea>
                                <div className='additional__media' >
                                    <input id='for-media' type="text" placeholder={language.media} className='additional__input' />
                                    <input className='additional__media--hidden' type="file" name="media2" id="media" accept='image/*' onChange={() => { showFileName('media', 'for-media') }} />
                                </div>
                                <div className='additional__media'>
                                    <input id='for-media2' type="text" placeholder={`${language.media} 2`} className='additional__input' />
                                    <input className='additional__media--hidden' type="file" name="media2" id="media2" accept='image/*' onChange={() => { showFileName('media2', 'for-media2') }} />
                                </div>
                            </div>
                            <div>
                                {thirdInputs.map((e, index) => {
                                    return (<input type="text" name={e.name} id={e.name} key={index} placeholder={e.placeholder} className='additional__input' />);
                                })}
                            </div>
                        </div>
                        <div className='additional__part'>
                            <textarea name="context" id="context" placeholder={language.optional} className='additional__input additional__textarea--long'></textarea>
                            <input type="submit" value={language.submit} className='additional__submit'/>
                        </div>
                    </form>
                </div>
            </div>
        </PageSkeleton>
    );
};