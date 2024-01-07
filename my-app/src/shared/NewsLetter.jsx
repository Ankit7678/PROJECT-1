import React from 'react';
import './newsLetter.css';

import { Container, Row, Col } from 'reactstrap';
import maleTourist from '../assets/images/male-tourist.png';

const NewsLetter = () => {
    return (
        <div>
            <section className='newsletter'>
                <Container>
                    <Row>
                        <Col lg='6'>
                            <div className='newsletter__content'>
                                <h2>Suscribe now to get usefull travelling information</h2>
                                <div className="newsletter__input">
                                    <input type='email' placeholder='Enter your email' />
                                    <button className='btn newsletter__btn'>Suscribe</button>
                                </div>
                            </div>
                        </Col>
                        <Col lg='6'>
                            <div className='newsletter__img'>
                                <img src={maleTourist} alt='' />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>



        </div>
    )
}

export default NewsLetter
