import { PageSkeleton } from '../../components/page-skeleton';


export const Profile = () => {
    
    const logout = () => {
        window.open(`${process.env.REACT_APP_API_URL}/auth/logout`, "_self");
    };
    return (
        <PageSkeleton header={'home'} footer={true}>
            <div>
                Profile
                <div>
                   
                </div>
                <div onClick={logout}>Log out</div>
            </div>
        </PageSkeleton>
    );
};