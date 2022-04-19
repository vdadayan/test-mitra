import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchGalleryAction} from "../../store/reducers/galleryReducer";
import Loader from "../Loader";
import CardImage from "../CardImage";
import styles from '../../styles/gallery.module.css'

const Gallery = () => {
    const dispatch = useDispatch()
    const {gallery, isLoading} = useSelector(state => state.galleryReducer)
    useEffect(() => {
        dispatch(fetchGalleryAction())
    }, [])
    if (!isLoading) return <Loader/>
    return (
        <div className={styles.galleryContainer}>
            {gallery.map(photo =>
                <CardImage {...photo} key={photo.id}/>
            )}
        </div>
    );
};

export default Gallery;
