import { instagram, linkedin, telegram } from "../../media";
import { Header } from "../headers/header";
import './footer.css';
export const Footer = () => {
    return (
        <div className='footer__anchor'>
            <Header left={
                <div className="footer__link">
                    <a href='https://www.nfactorial.school/'>
                        <div className='header__button'>
                            © 2022 nfactorial.school
                        </div>
                    </a>
                </div>
            } right={
                <div>
                    <img className='footer__logo button--hovered' src={linkedin} alt="linkedin" />
                    <img className='footer__logo button--hovered' src={telegram} alt="telegram" />
                    <img className='footer__logo button--hovered' src={instagram} alt="instagram" />
                </div>
            } />
        </div>
    );
};