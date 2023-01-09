
import { useNavigate } from "react-router-dom";
import { HeaderMain } from "../../components/header-main";


export const Main = () => {
    let navigate = useNavigate();

    async function toLogin() {
        navigate("/login", { replace: false });
    }
    
    return (
        <div>
            <HeaderMain />
            Main
            <div onClick={toLogin}>
                Sign in
            </div>
            
        </div>
    );
};