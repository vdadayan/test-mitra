import {ROUTE_GALERY,ROUTE_DETAIL,ROUTE_ABOUT} from "../consts";
import About from "../pages/About";
import Detail from "../pages/Detail";
import Gallery from "../pages/Gallery";

export const routes = [
    {
        path: ROUTE_ABOUT,
        component: <About/>
    },
    {
        path: ROUTE_DETAIL + '/:id',
        component: <Detail/>
    },
    {
        path: ROUTE_GALERY,
        component: <Gallery/>
    }
]
