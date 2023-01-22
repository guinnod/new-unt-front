import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Header } from "../header";
import './header-home.css';
export const HeaderHome = () => {
    const language = useSelector(state => state.language.value.header);
    const auth = useSelector(state => state.auth);
    const [profileDrop, setProfileDrop] = useState(false);
    return (
        <div>
            <Header left={
                <div className='header-home__left'>
                    <Link to='./testing'><div className='header__button'>{language.trialExam}</div></Link>
                    <Link to='./practice'><div className='header__button'>{language.practice}</div></Link>
                    <a href='http://www.testcenter.kz/postupayushchim-v-vuz/ent/edinoe-natsionalnoe-testirovanie-ent/' target='_blank' rel="noreferrer"><div className='header__button'>{language.guide}</div></a>
                </div>
            }
                right={
                    <div className='header-home__profile' onClick={() => { setProfileDrop(!profileDrop) }}>
                        <img className='header-home__portrait' src={auth.profilePhoto} alt="profile" />
                        <div className='header-home__name'>{auth.name}</div>
                        {profileDrop ?
                            <div className='profile-drop'>
                                <Link to='/home/profile'>
                                    <ul>
                                        <li>{language.myprofile}</li>
                                    </ul></Link>
                                <a href='w' target='_blank' rel="norefferer">
                                    <ul>
                                        <li>{language.connectWith}</li>
                                    </ul></a>
                                <hr></hr>
                                <Link to='/'>
                                    <ul>
                                        <li>{language.logOut}</li>
                                    </ul></Link>
                            </div> : <></>}
                    </div>
                } />
        </div>
    );
};