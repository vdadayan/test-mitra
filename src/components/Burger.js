import React, {useState} from 'react';
import styles from "../styles/header.module.css";
import Offcanvas from 'react-bootstrap/Offcanvas'
import {Link} from "react-router-dom";
import {ROUTE_GALLERY,ROUTE_ABOUT, ROUTE_DETAIL} from "./consts";
import {Figure} from "react-bootstrap";

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
                        <br/>
                        <Figure>
                            <Figure.Image
                                width={50}
                                height={50}
                                alt="avatar"
                                src="https://sun9-70.userapi.com/s/v1/if2/hI2t0PRHGhqYB0zQtUDEHDTJcBQ0HL-4uYcwiwr6Jk3zZJJPW3J9_qN2rhzp7FgcUE_nDa9z1huEX90kG9vzIe-C.jpg?size=999x664&quality=96&type=album"
                            />
                            <Figure.Caption>
                                Виталий
                            </Figure.Caption>
                            <Figure.Caption>
                                170012
                            </Figure.Caption>
                        </Figure>
                    </div>
                </Offcanvas.Body>
            </Offcanvas>
        </>

    );
};
