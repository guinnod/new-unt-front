import { instagram, linkedin, telegram } from "../../media";
import { Header } from "../headers/header";
import "./footer.css";
export const Footer = () => {
    return (
        <div className="footer__anchor">
            <Header
                left={
                    <div className="footer__link">
                        <a href="https://www.nfactorial.school/">
                            <div className="header__button">
                                © 2022 nfactorial.school
                            </div>
                        </a>
                    </div>
                }
                right={
                    <div>
                        <a
                            href="https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwiiyvKg2-2BAxXPCRAIHeu_Ar0QFnoECA8QAQ&url=https%3A%2F%2Fkz.linkedin.com%2Fin%2Fabzal-slamkozha&usg=AOvVaw1ECd90lOUwaySe20Z26X0d&opi=89978449"
                            target="_blank"
                        >
                            <img
                                className="footer__logo button--hovered"
                                src={linkedin}
                                alt="linkedin"
                            />
                        </a>
                        <a href="https://t.me/abzalslamkozha" target="_blank">
                            <img
                                className="footer__logo button--hovered"
                                src={telegram}
                                alt="telegram"
                            />
                        </a>
                        <a
                            href="https://www.instagram.com/p/Cs5NoDlIh_p/?img_index=4"
                            target="_blank"
                        >
                            <img
                                className="footer__logo button--hovered"
                                src={instagram}
                                alt="instagram"
                            />
                        </a>
                    </div>
                }
            />
        </div>
    );
};
