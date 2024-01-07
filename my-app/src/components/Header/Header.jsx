// import React,{useRef , useEffect} from 'react'

import React from 'react';

import {Container, Row,Button} from 'reactstrap';
import {NavLink} from 'react-router-dom'; 

import logo from '../../assets/images/logo.png';
import './header.css';


const nav__links = [
    {
        path: '/home',
        display: 'HOME'
    },
    {
        path: '/about',
        display: 'ABOUT'
    },
    {
        path: '/Instruction',
        display: 'INSTRUCTION'
    },
    {
        path: '/reviews',
        display: 'REVIEWS'
    },
    {
        path: '/login',
        display: 'LOGIN'
    },
    {
        path: '/register',
        display: 'REGISTER'
    },
]

const Header = () => {

  return (
    <div>
    <header className="header" >
        {/* ref={headerRef}> */}
            <Container>
                <Row>
                    <div className="nav__wrapper d-flex align-item-center justify-content-between">
                        {/*------logo--start-------- */}
                        <div className="logo">
                            <img src={logo} alt="" />
                        </div>
                        {/*------logo--end-------- */}

                        {/*------menu--start-------- */}
                        <div className="navigation">
                            <ul className="menu d-flex align-items-center gap-5 mt-2" >
                                {nav__links.map((item, index) => (
                                    <li className="nav__item" key={index}>
                                        <NavLink
                                        to={item.path} 
                                        className={navClass => navClass.
                                        isActive ? 'active__link' : ""
                                    }
                                    >
                                        {item.display}
                                        </NavLink>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/*------menu--end-------- */}
                    </div>
                </Row>
            </Container>
        </header>
        </div>
  )
}

export default Header;

