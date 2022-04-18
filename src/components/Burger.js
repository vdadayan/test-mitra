import React, {useState} from 'react';
import styles from "../styles/Header.module.css";
import Offcanvas from 'react-bootstrap/Offcanvas'
import {Link} from "react-router-dom";
import {ABOUT} from "./consts";

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
                        <Link to={'/'}>Галерея</Link>
                        <Link to={ABOUT}>О себе</Link>
                        <Link to={'/detail'}>Подробности о картинке</Link>
                    </div>
                </Offcanvas.Body>
            </Offcanvas>
        </>

    );
};
