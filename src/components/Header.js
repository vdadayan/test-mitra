import React from 'react';
import {Container} from "react-bootstrap";
import styles from '../styles/header.module.css'
import {Burger} from "./Burger";

const Header = () => {

    return (
        <div className={styles.header}>
            <Container fluid="md">
                <Burger/>
            </Container>
        </div>
    );
};

export default Header;
