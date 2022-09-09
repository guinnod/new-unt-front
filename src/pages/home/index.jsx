import { useContext } from "react";
import { DefaultContext } from "../../Context.js";

export const Home = () => {
    const user = useContext(DefaultContext);

    const logout = () => {
        window.open(`${process.env.REACT_APP_API_URL}/auth/logout`, "_self");
    };

    return (
        <div>
            Home
            <div>
                {user.name}
            </div>
            <div onClick={logout}>Log out</div>
        </div>
    );
};