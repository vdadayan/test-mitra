import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {actionGallery} from "../../store/actions/actionGallery";
import Loader from "../Loader";

const Gallery = () => {
    const dispatch = useDispatch()
    const {gallery, isLoading} = useSelector(state => state.galleryReducer)
    useEffect(()=> {
        setTimeout(()=> {
            dispatch(actionGallery())
        },500)
    },[])
    if (isLoading) return <Loader/>
    return (
        <div>
            {gallery.map(img =>
            <div>{img.title}</div>)}
        </div>
    );
};

export default Gallery;
