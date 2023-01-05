import { useContext } from "react";
import { PageSkeleton } from "../../components/universals/page-skeleton";
import { DefaultContext } from "../../Context";

export const Profile = () => {
    const { user } = useContext(DefaultContext);

    const logout = () => {
        window.open(`${process.env.REACT_APP_API_URL}/auth/logout`, "_self");
    };
    return (
        <PageSkeleton header={'home'} footer={true}>
            <div>
                Profile
                <div>
                    {user.name}
                </div>
                <div onClick={logout}>Log out</div>
            </div>
        </PageSkeleton>
    );
};