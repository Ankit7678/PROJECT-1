import React from 'react'
import {Container, Row,Col,Button} from 'reactstrap';
import {link} from 'react-router-dom';
import '../styles/thank-you.css';

const ThankYou = () => {
  return (
    <div>
      <Container>
        <Row>
            <Col lg='12 pt-5 text-center'>
                <div className="thank__you">
                    <span><i class='ri-checkbox-line'></i></span>
                    <h1 className='mb-3 fw-semibold'>Thank You</h1>
                    <h3 className='mb-4'> Your tour is booked</h3>

                    <Button className='btn primary__btn w-25'>
                        <a href='/home'>Back to home</a>
                    </Button>
                </div>
            </Col>
        </Row>
      </Container>
    </div>
  )
}

export default ThankYou
