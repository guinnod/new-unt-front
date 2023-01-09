import { Navigate, Outlet } from "react-router-dom";
const Protected = ({ isAuthorized }) => {
    if (!isAuthorized) {
        return <Navigate to="/login" replace />;
    }
    return <Outlet />;
};
export default Protected;