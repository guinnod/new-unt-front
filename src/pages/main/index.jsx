import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { PageSkeleton } from "../../components/page-skeleton";
import { forinput, freecodecamp, hackkerrank } from "../../media";

import "./main.css";
import { useState } from "react";
import { message } from "antd";
export const Main = () => {
    const language = useSelector((state) => state.language.value.main);
    const [inputValue, setInputValue] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue === "print('Hello Alem!')") {
            window.location.href = "/home";
        } else {
            message.error(language.error);
        }
    };
    return (
        <PageSkeleton>
            <div className="main__anchor">
                <div className="main__text--top">
                    <div className="main__news center">
                        {language.newSubject}
                    </div>
                    <div className="main__text--big">
                        <div>{language.bigText}</div>
                        <div>{language.bigText2}</div>
                    </div>
                    <h1>{language.readyTo}</h1>
                    <h4>
                        {language.firstStep1}
                        <span className="main__text--span">
                            print('Hello Alem!')
                        </span>
                        {language.firstStep2}
                    </h4>
                    <form onSubmit={handleSubmit}>
                        <div className="main__input">
                            <img
                                className="main__input__image"
                                src={forinput}
                                alt="input"
                            ></img>
                            <input
                                id="main__input"
                                tabIndex={0}
                                value={inputValue}
                                onChange={(e) => {
                                    setInputValue(e.target.value);
                                }}
                                autoFocus
                                autoComplete="off"
                            ></input>
                        </div>
                    </form>
                </div>
                <div className="main__optional">
                    <div className="main__learn">
                        <div className="main__optional--header">
                            {language.toLearn}
                        </div>
                        <div className="main__learn__block__anchor">
                            <div className="main__learn__block">
                                <img
                                    className="main__learn__img--circled"
                                    src={freecodecamp}
                                    alt="freecodecamp"
                                ></img>
                                <div className="main__learn__block__text">
                                    <div>{language.learnHtml}</div>
                                    <div>{language.learnHtmlText}</div>
                                </div>
                            </div>
                            <a
                                href="https://www.freecodecamp.org/learn/2022/responsive-web-design/learn-html-by-building-a-cat-photo-app/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                {language.startLearn}
                            </a>
                        </div>
                        <div className="main__learn__block__anchor">
                            <div className="main__learn__block">
                                <img
                                    className="main__learn__img--medium"
                                    src={hackkerrank}
                                    alt="freecodecamp"
                                ></img>
                                <div className="main__learn__block__text">
                                    <div>{language.learnPython}</div>
                                    <div>{language.learnPythonText}</div>
                                </div>
                            </div>
                            <a
                                href="https://www.hackerrank.com/domains/python?filters%5Bstatus%5D%5B%5D=unsolved&badge_type=python"
                                target="_blank"
                                rel="noreferrer"
                            >
                                {language.startLearn}
                            </a>
                        </div>
                    </div>

                    <div className="main__optional__news__root">
                        <div className="main__optional--header">
                            {language.news}
                            <span className="main__optional--header--sub">
                                {language.beOn}
                            </span>
                        </div>
                        <div className="main__optional__news">
                            <a
                                href="https://informburo.kz/kaz/newskaz/ubt-bejindik-paender-tizbesine-informatika-engizildi"
                                target="_blank"
                                rel="noreferrer"
                            >
                                informburo.kz
                            </a>
                            <div className="main__optional__news__content">
                                {language.newsText}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="main__ready__anchor">
                    <h1 className="main__ready">{language.signText}</h1>
                    <Link to="register">
                        <div className="main__ready__button">
                            {language.signUp}
                        </div>
                    </Link>
                </div>
            </div>
        </PageSkeleton>
    );
};
