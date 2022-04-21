import React, {useEffect} from 'react';
import {Link, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {fetchDetailPhotoAction} from "../../store/reducers/detailPhotoReducer";
import Loader from "../Loader";
import {ROUTE_GALLERY} from "../consts";
import DetailCard from "../DetailCard";

const Detail = () => {
    const params = useParams()
    const dispatch = useDispatch()
    const {detailPhoto, isLoading} = useSelector(state => state.detailPhotoReducer)
    useEffect(() => {
        dispatch(fetchDetailPhotoAction(params.id))
    }, [])
    if (!isLoading) return <Loader/>
    return (
        <>
            <div>
                <Link to={ROUTE_GALLERY}>Назад</Link>
            </div>
            {detailPhoto.map(detail =>
                <DetailCard detail={detail} key={detail.id}/>
            )}
        </>
    );
};

export default Detail;
