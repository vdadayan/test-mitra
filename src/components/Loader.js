import React from 'react';
import {Spinner} from "react-bootstrap";

const Loader = () => {
    return (
        <div style={{display: "flex"}}>
            <Spinner animation='grow' size="md"/>
            <Spinner animation='grow' size="md"/>
            <Spinner animation='grow' size="md"/>
        </div>
    );
};

export default Loader;
