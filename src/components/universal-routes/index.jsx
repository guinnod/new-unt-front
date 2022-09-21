import { NotFound } from "../../pages/not-found";
import { Routes, Route } from 'react-router-dom';
export const UniversalRoutes = ({ routes }) => {
    return (
        <Routes>
            {routes.map(({ path, Component }) => (
                <Route key={path} path={path} element={Component} />
            ))}
            <Route path="/*" element={<NotFound />} />
        </Routes>
    );
};