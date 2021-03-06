import React, {useState} from 'react';
import Figure from 'react-bootstrap/Figure'
import classNames from "classnames";
import {ROUTE_DETAIL} from "./consts";
import {Link} from "react-router-dom";

const CardItem = (props) => {
    const [tooltip, showTooltip] = useState(false)
    return (
        <Figure onMouseOver={() => showTooltip(true)} onMouseLeave={() => showTooltip(false)}>
            <Figure.Image src={props.thumbnailUrl} width={150} height={150} alt="171x180"/>
            <Figure.Caption>{props.title}</Figure.Caption>
            <Link
                className={classNames({
                    '-open': tooltip,
                    'cardTooltip': true
                })} to={`${ROUTE_DETAIL}/${props.id}`}>
                подробнее
            </Link>
        </Figure>
    );
};

export default CardItem;
