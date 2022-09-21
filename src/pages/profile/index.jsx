import { useContext } from "react";
import { DefaultContext } from "../../Context";

export const Profile = () => {
    const { user } = useContext(DefaultContext);

    const logout = () => {
        window.open(`${process.env.REACT_APP_API_URL}/auth/logout`, "_self");
    };
    return (
        <div>
            Profile
            <div>
                {user.name}
            </div>
            <div onClick={logout}>Log out</div>
        </div>
    );
};