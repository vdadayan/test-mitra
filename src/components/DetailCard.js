import React from 'react';
import {Figure} from "react-bootstrap";

const DetailCard = ({detail}) => {
    return (
        <Figure>
            <Figure.Image src={detail.thumbnailUrl} width={150} height={150} alt="171x180"/>
            <p>{detail.title}</p>
            <p>{detail.id}</p>
            <a href={detail.url}>{detail.url}</a>
        </Figure>
    );
};

export default DetailCard;
