import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { CardDark } from "../../components/cards/card-dark";
import { PageSkeleton } from "../../components/page-skeleton";
import "./login.css";
import { useMutation } from "@tanstack/react-query";
import { axios } from "../../config/axios";
import { Button, message } from "antd";
import { useFormik } from "formik";

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
    const postLogin = (data) => axios.post("/api/login/", data);
    const initialValues = {
        username: "",
        password: "",
    };
    const formik = useFormik({ initialValues, onSubmit: () => {} });
    const mutation = useMutation({
        mutationFn: postLogin,
        onSuccess: () => {
            console.log("success");
        },
        onError: () => {
            message.error(language.error);
        },
    });

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
                            value={formik.values.username}
                            onChange={formik.handleChange}
                        />
                        <input
                            onChange={formik.handleChange}
                            value={formik.values.password}
                            type="password"
                            id="password"
                            placeholder={language.password}
                            style={{ textAlign: "start" }}
                        />
                        <Button
                            className="button--hovered login__card__button"
                            onClick={() => {
                                mutation.mutate();
                            }}
                            loading={mutation.isLoading}
                        >
                            <div>{language.signIn}</div>
                        </Button>
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
    const postLogin = (data) => {
        return axios.post("/api/register/", data);
    };
    const mutation = useMutation({
        mutationFn: postLogin,
        onSuccess: () => {
            console.log("success");
        },
        onError: () => {
            message.error(language.error);
        },
    });
    const initialValues = {
        username: "",
        password: "",
        repeatPassword: "",
    };
    const formik = useFormik({ initialValues, onSubmit: () => {} });
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
                            value={formik.values.username}
                            onChange={formik.handleChange}
                        />
                        <input
                            type="password"
                            id="password"
                            placeholder={language.password}
                            style={{ textAlign: "start" }}
                            value={formik.values.password}
                            onChange={formik.handleChange}
                        />
                        <input
                            type="password"
                            id="repeatPassword"
                            placeholder={language.repeatPassword}
                            style={{ textAlign: "start" }}
                            value={formik.values.repeatPassword}
                            onChange={formik.handleChange}
                        />
                        <Button
                            className="button--hovered login__card__button"
                            onClick={() => {
                                if (formik.values.username.length < 4) {
                                    message.error(
                                        language.username +
                                            " " +
                                            language.minLength
                                    );
                                    return;
                                }
                                if (formik.values.password.length < 4) {
                                    message.error(
                                        language.password +
                                            " " +
                                            language.minLength
                                    );
                                    return;
                                }
                                if (
                                    formik.values.password !==
                                    formik.values.repeatPassword
                                ) {
                                    message.error(language.equalRepeat);
                                    return;
                                }
                                mutation.mutate(formik.values);
                            }}
                            loading={mutation.isLoading}
                        >
                            <div>{language.signUp}</div>
                        </Button>
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
