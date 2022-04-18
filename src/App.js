import React from 'react';
import {Container} from "react-bootstrap";
import Header from "./components/Header";
import 'bootstrap/dist/css/bootstrap.css';
import MainStack from "./components/MainStack";


const App = () => {
    return (
        <>
            <Header/>
            <div className='main'>
                <Container fluid={"md"}>
                    <MainStack/>
                </Container>
            </div>
        </>
    );
};

export default App;
