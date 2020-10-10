import React, { Component, useState } from 'react';
import './HomePage.css';
import { Button, Row, Col, Container } from 'reactstrap';
import FlashNavbar from '../FlashNavbar/FlashNavbar';
import { Link } from "react-router-dom";
import ReactCardFlip from 'react-card-flip';


const HomePage = () => {

    const [isFirstFlipped, setIsFirstFlipped] = useState(false);
    const [isSecondFlipped, setIsSecondFlipped] = useState(false);
    const [isThirdFlipped, setIsThirdFlipped] = useState(false);
    const [isFourthFlipped, setIsFourthFlipped] = useState(false);
    const [isFifthFlipped, setIsFifthFlipped] = useState(false);


    const handleFirstFlip = () => {
        setIsFirstFlipped(!isFirstFlipped);
    };
    const handleSecondFlip = () => {
        setIsSecondFlipped(!isSecondFlipped);
    };
    const handleThirdFlip = () => {
        setIsThirdFlipped(!isThirdFlipped);
    };
    const handleFourthFlip = () => {
        setIsFourthFlipped(!isFourthFlipped);
    };
    const handleFifthFlip = () => {
        setIsFifthFlipped(!isFifthFlipped);
    };

    return(
        <div className="HomePage">
            <FlashNavbar />
                <Row className="HomePageCards" xs="5">
                    <Col className="HomePageCard">
                        <ReactCardFlip
                            isFlipped={isFirstFlipped}
                            infinite={true}
                        >
                            <div 
                                className="HomeCardFront"
                                id="HomeF"
                                onMouseEnter={handleFirstFlip}
                            >
                                f
                            </div>
                            <div
                                className="HomeCardBack"
                                id="HomeF"
                                onMouseEnter={handleFirstFlip}
                            >
                                F
                            </div>
                        </ReactCardFlip> 
                    </Col>
                    <Col className="HomePageCard">
                        <ReactCardFlip
                            isFlipped={isSecondFlipped}
                            infinite={true}
                        >
                            <div 
                                className="HomeCardFront"
                                id="HomeL"
                                onMouseEnter={handleSecondFlip}
                            >
                                l
                            </div>
                            <div
                                className="HomeCardBack"
                                id="HomeL"
                                onMouseEnter={handleSecondFlip}
                            >
                                L
                            </div>
                        </ReactCardFlip>
                    </Col>
                    <Col className="HomePageCard">
                        <ReactCardFlip
                            isFlipped={isThirdFlipped}
                            infinite={true}
                        >
                            <div 
                                className="HomeCardFront"
                                id="HomeA"
                                onMouseEnter={handleThirdFlip}
                            >
                                a
                            </div>
                            <div
                                className="HomeCardBack"
                                id="HomeA"
                                onMouseEnter={handleThirdFlip}
                            >
                                A
                            </div>
                        </ReactCardFlip>
                    </Col>
                    <Col className="HomePageCard">
                        <ReactCardFlip
                            isFlipped={isFourthFlipped}
                            infinite={true}
                        >
                            <div 
                                className="HomeCardFront"
                                id="HomeS"
                                onMouseEnter={handleFourthFlip}
                            >
                                s
                            </div>
                            <div
                                className="HomeCardBack"
                                id="HomeS"
                                onMouseEnter={handleFourthFlip}
                            >
                                S
                            </div>
                        </ReactCardFlip>
                    </Col>
                    <Col className="HomePageCard">
                        <ReactCardFlip
                            isFlipped={isFifthFlipped}
                            infinite={true}
                        >
                            <div 
                                className="HomeCardFront"
                                id="HomeH"
                                onMouseEnter={handleFifthFlip}
                            >
                                h
                            </div>
                            <div
                                className="HomeCardBack"
                                id="HomeH"
                                onMouseEnter={handleFifthFlip}
                            >
                                H
                            </div>
                        </ReactCardFlip>
                    </Col>
                </Row>
        </div>
        
    );
}

export default HomePage;