import { Route } from 'react-router-dom';
import { getRoutes } from './data/consts';

export const universalRoutes = (content, language) => {
    return (
        getRoutes(content, language).map(({ path, Component }, index) => (
            <Route key={index} path={path} element={Component} />
        ))
    );
};