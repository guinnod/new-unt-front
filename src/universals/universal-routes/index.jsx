import { Route } from 'react-router-dom';
export const universalRoutes = (routes) => {
    return (
        routes.map(({ path, Component }) => (
            <Route key={path} path={path} element={Component} />
        ))
    );
};