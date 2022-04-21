import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchGalleryAction} from "../../store/reducers/galleryReducer";
import Loader from "../Loader";
import CardItem from "../CardItem";
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
            name: 'категория'
        },
        {
            id: 2,
            name: 'категория'
        },
        {
            id: 3,
            name: 'категория'
        },
        {
            id: 4,
            name: 'категория'
        }
    ]

    if (!isLoading) return <Loader/>
    return (
        <>
            <Form.Select onChange={(e) => loadPhotos(e)}>
                {categories.map((select =>
                        <option key={select.id} value={select.id}>{select.name + select.id}</option>
                ))}

            </Form.Select>
            <div className={styles.galleryContainer}>
                {gallery.map(photo =>
                    <CardItem {...photo} key={photo.id}/>
                )}
            </div>
        </>
    );
};

export default Gallery;
