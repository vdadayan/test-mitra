import React, {useState} from 'react';
import styles from "../styles/header.module.css";
import Offcanvas from 'react-bootstrap/Offcanvas'
import {Link} from "react-router-dom";
import {ROUTE_GALLERY,ROUTE_ABOUT, ROUTE_DETAIL} from "./consts";

export const Burger = () => {
    const [show, setShow] = useState(false)
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <div className={styles.burger} onClick={handleShow}>
                <span className={styles.firstLine}/>
                <span className={styles.secondLine}/>
                <span className={styles.thirdLine}/>
            </div>
            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <div className={styles.burgerTooltip}>
                        <Link to={ROUTE_GALLERY}>Галерея</Link>
                        <Link to={ROUTE_ABOUT}>О себе</Link>
                    </div>
                </Offcanvas.Body>
            </Offcanvas>
        </>

    );
};
