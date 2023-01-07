import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { HeaderMain } from "../../components/header-main";
import { languageActions } from "../../store/language";

export const Main = () => {
    let navigate = useNavigate();

    async function toLogin() {
        navigate("/login", { replace: false });
    }
    const dispatch = useDispatch();
    const changeLanguage = () => {
        dispatch(languageActions.change());
    }
    return (
        <div>
            <HeaderMain />
            Main
            <div onClick={toLogin}>
                Sign in
            </div>
            <div onClick={changeLanguage}>Flag</div>
        </div>
    );
};