import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { CardDark } from "../../components/cards/card-dark";
import { LazyImage } from "../../components/lazy-image";
import { PageSkeleton } from "../../components/page-skeleton";
import { google } from "../../media";
import "./login.css";

const LoginText = () => {
    const language = useSelector((state) => state.language.value.login);
    return (
        <div className="login__text">
            <div className="login__text--big">{language.goodPlatform2}</div>
            <div className="login__text--big login__text--big--yellow">
                {language.goodPlatform}
            </div>
            <div className="login__text--medium">{language.prepareTo}</div>
            <ul>
                <li>{language.takingExams}</li>
                <li>{language.practicing}</li>
                <li>{language.learning}</li>
            </ul>
        </div>
    );
};

export const Login = () => {
    const language = useSelector((state) => state.language.value.login);
    return (
        <PageSkeleton>
            <div className="login__anchor">
                <LoginText />
                <CardDark>
                    <div className="login__card">
                        <input
                            type="text"
                            id="username"
                            placeholder={language.username}
                            style={{ textAlign: "start" }}
                        />
                        <input
                            type="password"
                            id="password"
                            placeholder={language.password}
                            style={{ textAlign: "start" }}
                        />
                        <Link to="/home">
                            <div className="button--hovered login__card__button">
                                <div>{language.signIn}</div>
                            </div>
                        </Link>
                        <div className="login__card__text">
                            {language.alreadyHave}{" "}
                            <Link
                                to="/register"
                                style={{ textDecoration: "underline" }}
                            >
                                {language.signUp}
                            </Link>
                        </div>
                    </div>
                </CardDark>
            </div>
        </PageSkeleton>
    );
};

export const Register = () => {
    const language = useSelector((state) => state.language.value.login);
    return (
        <PageSkeleton>
            <div className="login__anchor">
                <LoginText />
                <CardDark>
                    <div className="login__card">
                        <input
                            type="text"
                            id="username"
                            placeholder={language.username}
                            style={{ textAlign: "start" }}
                        />
                        <input
                            type="password"
                            id="password"
                            placeholder={language.password}
                            style={{ textAlign: "start" }}
                        />
                        <input
                            type="password"
                            id="repeatPassword"
                            placeholder={language.repeatPassword}
                            style={{ textAlign: "start" }}
                        />
                        <Link to="/home">
                            <div className="button--hovered login__card__button">
                                <div>{language.signUp}</div>
                            </div>
                        </Link>
                        <div className="login__card__text">
                            {language.alreadyHave}{" "}
                            <Link
                                to="/login"
                                style={{ textDecoration: "underline" }}
                            >
                                {language.signIn}
                            </Link>
                        </div>
                    </div>
                </CardDark>
            </div>
        </PageSkeleton>
    );
};
