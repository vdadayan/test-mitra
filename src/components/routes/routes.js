import {ABOUT, DETAIL, GALERY} from "../consts";
import About from "../pages/About";
import Detail from "../pages/Detail";
import Gallery from "../pages/Gallery";

export const routes = [
    {
        path: ABOUT,
        component: <About/>
    },
    {
        path: DETAIL,
        component: <Detail/>
    },
    {
        path: GALERY,
        component: <Gallery/>
    }
]
