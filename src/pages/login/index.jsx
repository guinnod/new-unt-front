import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { DefaultContext } from "../../Context";

export const Login = () => {
    const { user } = useContext(DefaultContext);
    let navigate = useNavigate();

    async function toHome() {
        navigate("/home", { replace: true });
    }
    const googleAuth = () => {
        window.open(
            `${process.env.REACT_APP_API_URL}/auth/google/callback`,
            "_self"
        );
    };
    const signIn = () => {
        if (user) {
            toHome();
        }
        else {
            googleAuth();
        }
    }
    return (
        <div>
            Login
            <div onClick={signIn}>
                to Home
            </div>
        </div>
    );
};