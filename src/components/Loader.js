import React from 'react';
import {Spinner} from "react-bootstrap";

const Loader = () => {
    return (
        <div style={{display: "flex", position: "absolute", top: '50%', left: '50%'}}>
            <Spinner animation='grow' size="md"/>
            <Spinner animation='grow' size="md"/>
            <Spinner animation='grow' size="md"/>
        </div>
    );
};

export default Loader;
