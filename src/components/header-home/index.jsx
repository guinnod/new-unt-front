import { useContext } from "react";
import { DefaultContext } from "../../Context";
import { deafultUser } from "../../media";
import { Header } from "../universals/header";
import './header-home.css';
export const HeaderHome = () => {
    const {language} = useContext(DefaultContext);
    return (
        <div>
            <Header left={
                <div className='header-home__left'>
                    <div className='header__button'>{language.header.trialExam}</div>
                    <div className='header__button'>{language.header.practice}</div>
                    <div className='header__button'>{language.header.guide}</div>
                </div>
            } 
            right={
            <div>
                <img className='header-home__portrait' src={deafultUser} alt="profile" />
                <div className='header__button header-home__name'>Tauekel</div>
            </div>}/>
        </div>
    );
};