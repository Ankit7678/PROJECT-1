import React, { useState } from 'react'
import { Container, Row, Col, Form, FormGroup, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { link } from 'react-router-dom';
import '../styles/login.css';

import registerImg from '../assets/images/register.png';
import userIcon from '../assets/images/user.png';

const Register = () => {
  const [credentials, setCredentials] = useState({
    userName:'undefined',
    email:'undefined',
    password:'undefined'
    
});

  const handleChange = e =>{
    setCredentials(prev=>({...prev,[e.target.id]:e.target.value}));
};


const handleClick = e => {
  e.preventDefault();};






  return (
    <div>
      <section>
        <Container>
          <Row>
            <Col lg='8' className='m-auto'>
              <div className="login__container d-flex justify-content-between">
                <div className="login__img">
                  <img src={registerImg} alt='' />
                </div>
                <div className="login__form">
                  <div className="user">
                    <img src={userIcon} alt='' />
                  </div>
                  <h2>Register</h2>

                  <Form onSubmit={handleClick}>
                    <FormGroup>
                      <input type='text' placeholder='USERname' required id='username'
                        onChange={handleChange} />
                    </FormGroup>
                    <FormGroup>
                      <input type='email' placeholder='Email' required id='email'
                        onChange={handleChange} />
                    </FormGroup>
                    <FormGroup>
                      <input type='password' placeholder='Password' required id='password'
                        onChange={handleChange} />
                    </FormGroup>
                    <Button className='btn secondary__btn auth__btn ' type='submit '>create Account</Button>
                  </Form>
                  <p>Already have a account <a href='/login'>Login</a></p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  )
}

export default Register;


