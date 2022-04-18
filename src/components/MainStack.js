import React from 'react';
import {Route, Routes} from "react-router-dom";
import {routes} from "./routes/routes";

const MainStack = () => {
    return (
        <>
            <Routes>
                {routes.map((route,i) =>
                    <Route key={i} path={route.path} element={route.component}/>
                )}
            </Routes>

        </>
    );
};

export default MainStack;
