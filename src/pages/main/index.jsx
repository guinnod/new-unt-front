import { useNavigate } from "react-router-dom";

export const Main = () => {
    let navigate = useNavigate();

    async function toLogin() {
        navigate("/login", { replace: false });
    }
    return (
        <div>
            Main
            <div onClick={toLogin}>
                Sign in
            </div>
        </div>
    );
};