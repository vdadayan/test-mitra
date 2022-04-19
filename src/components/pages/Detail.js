import React, {useEffect} from 'react';
import {Link, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {fetchDetailPhotoAction} from "../../store/reducers/detailPhotoReducer";
import Loader from "../Loader";
import CardImage from "../CardImage";
import {ROUTE_GALLERY} from "../consts";

const Detail = () => {
    const params = useParams()
    const dispatch = useDispatch()
    const {detailPhoto, isLoading} = useSelector(state => state.detailPhotoReducer)
    useEffect(() => {
        dispatch(fetchDetailPhotoAction(params.id))
    }, [])
    if (!isLoading) return <Loader/>
    return (
        <div>
            <Link to={ROUTE_GALLERY}>Назад</Link>
            {detailPhoto.map(detail =>
                <CardImage key={detail.id} {...detail}/>
            )}
        </div>
    );
};

export default Detail;
