import { NotFound } from "../../../pages/not-found";
import { Routes, Route } from 'react-router-dom';
export const temp = (routes) => {
    return (
        routes.map(({ path, Component }) => (
            <Route key={path} path={path.substring(1)} element={Component} />
        ))
    );
};