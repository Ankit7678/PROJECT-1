import React from 'react'
import { Container, Row, Col, Button } from 'reactstrap';
import Testimonials from "../components/Testimonial/Testimonials";

import logo from '../assets/images/das.jpg';
import '../styles/about.css';
import Course from './Course';
import Instruction from './Instruction';

const instructor = {
   
    name: "NITYANAND CHARAN DAS",
    social_media: {
      facebook: true,
      twitter: true,
      youtube: true,
      instagram: true,
    },
}

const course =  {
    title: "Learn key life lessons from the Gita: Mind control and conflict resolution",
    fee: {
      amount: 5000,
      currency: "INR",
    }
}

const About = () => {
   
    return (
        <div>
            <section >
                <Container className="back__img">
                    <Row>
                        <Col lg="12">
                            <div className="hero__container">
                                <h5>{instructor.name}</h5>
                                <Col lg='6'><h2> {course.title}
                                </h2>
                                </Col>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section>
                <Container>
                    <Row>
                        <Col lg='6 pt-5'>
                            <div className="about__page align-item-center justify-content-center">
                                <h1>About the course</h1>
                                <p>"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"</p>
                                <p>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                                    accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo".</p>
                                <p>"Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."</p>
                                <h2>What to expect from the course</h2>
                                <div className="Notice__display d-flex">
                                    <div className='Notice__name d-flex align-items-center gap-4'>
                                        <i class='ri-check-line'></i>
                                        <p class='align-items-center'>Learn to manage your relatioships</p>
                                    </div>

                                    <div className='Notice__name d-flex align-items-center gap-4'>
                                        <i class='ri-check-line'></i><p class='align-items-center'>Better communication</p>
                                    </div>

                                    <div className='Notice__name d-flex align-items-center gap-4'>
                                        <i class='ri-check-line'> </i><p>Time management </p>
                                    </div>

                                    <div className='Notice__name d-flex align-items-center gap-4'>
                                        <i class='ri-check-line'></i><p>Forgiveness</p>
                                    </div>
                                </div>


                            </div>


                        </Col>

                        <Col lg='6'>
                            <Course />
                        </Col>
                    </Row>
                </Container>

                <Container>
                    <Row>
                        <Col lg='6 mt-0'>
                            <div className="about__page__key align-item-center justify-content-center">
                                <h1>Key topics coverd</h1>
                                <p>"Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."</p>

                                <div className="Notice__display d-flex">
                                    <div className='Notice__name d-flex align-items-center gap-4'>
                                        <i class='ri-check-line'></i><p><b>5 on-demand videos </b>"On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment"</p>
                                    </div>

                                    <div className='Notice__name d-flex align-items-center gap-4'>
                                        <i class='ri-check-line'></i><p><b>institu</b>"On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment"
                                        </p>
                                    </div>

                                    <div className='Notice__name d-flex align-items-center gap-4'>
                                        <i class='ri-check-line'></i><p><b>A handy reference</b>"On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment"</p>
                                    </div>

                                    <div className='Notice__name d-flex align-items-center gap-4'>
                                        <i class='ri-check-line'></i><p><b>expert-techniques</b>"On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire"</p>
                                    </div>
                                </div>


                            </div>


                        </Col>
                    </Row>
                </Container>

                <Container>
                    <Row>
                        <Col lg='12 mt-0'>
                            <h1>About the Instructor</h1>
                        </Col>
                        <Col lg='4 mt-0'>
                            <div className="logo__About">
                            <img src={logo} alt="" />
                        </div> 
                        </Col>
                        <Col lg='4 mt-0'>
                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                        </Col>
                        <Col lg='4 mt-0'>
                            <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.</p>
                        </Col>
                    </Row>

                </Container>
                <Container>
                    <Row>
                        <Col lg='4 mt-0'>

                        </Col>
                        <Col lg='4 mt-0'>
                            <div className='Social d-flex'>
                            <span>
                                <a to='#'>
                                    <i class='ri-youtube-line'> Youtube</i>
                                </a>
                            </span>

                            <span>
                                <a to='#'>
                                    <i class='ri-facebook-circle-fill'>Facebook</i>
                                </a>
                            </span></div>
                            
                        </Col>
                        <Col lg='4 mt-0'>
                        <div className='Social d-flex'>
                        <span>
                                <a to='#'>
                                    <i class='ri-twitter-line'> twitter</i>
                                </a>
                            </span>

                            <span>
                                <a to='#'>
                                    <i class='ri-instagram-fill'>Instagram</i>
                                </a>
                            </span>
                            </div>
                        </Col>
                    </Row>

                </Container>
            </section>
            <section>
                <Container>
                    <Row>
                    <Col lg='12'>
                            <h3>Testimonials</h3>
                        </Col>
                        <Col lg='12'>
                            <Testimonials />
                        </Col>
                    </Row>
                </Container>
            </section>

        </div>

    )
}

export default About
