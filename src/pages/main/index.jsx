import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { DefaultContext } from "../../Context";
export const Main = () => {
    let navigate = useNavigate();

    async function toLogin() {
        navigate("/login", { replace: false });
    }
    const { handleSetLanguage } = useContext(DefaultContext);
    
    return (
        <div>
            Main
            <div onClick={toLogin}>
                Sign in
            </div>
            <div onClick={handleSetLanguage}>Flag</div>
        </div>
    );
};