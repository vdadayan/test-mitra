import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchGalleryAction} from "../../store/reducers/galleryReducer";
import Loader from "../Loader";
import CardImage from "../CardImage";
import styles from '../../styles/gallery.module.css'
import {Form} from "react-bootstrap";

const Gallery = () => {
    const dispatch = useDispatch()
    const {gallery, isLoading} = useSelector(state => state.galleryReducer)
    useEffect(() => {
        dispatch(fetchGalleryAction())
    }, [])
    const loadPhotos = (e) => {
        const {value} = e.target
        dispatch(fetchGalleryAction(value))
    }
    const categories = [
        {
            id: 1,
            name: 'categories'
        },
        {
            id: 2,
            name: 'categories'
        },
        {
            id: 3,
            name: 'categories'
        },
        {
            id: 4,
            name: 'categories'
        }
    ]

    if (!isLoading) return <Loader/>
    return (
        <>
            <Form.Select onChange={(e) => loadPhotos(e)}>
                {categories.map((select =>
                        <option key={select.id} value={select.id}>{select.id}</option>
                ))}

            </Form.Select>
            <div className={styles.galleryContainer}>
                {gallery.map(photo =>
                    <CardImage {...photo} key={photo.id}/>
                )}
            </div>
        </>
    );
};

export default Gallery;
