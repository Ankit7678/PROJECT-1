import React from "react";
import '../styles/home.css';

import { Container, Row, Col } from 'reactstrap';

import Testimonials from "../components/Testimonial/Testimonials";

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
const Home = () => {
  return <>

    {/*--------hero-section-start-------- */}
    <section className="Home__container">
      <Container className="back__img">
        <Row>
          <Col lg="12">
            <div className="hero__container mt-10">
              <h5>{instructor.name}</h5>
              <Col lg='6'>
                <h2> {course.title}
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
          <Col lg='12 mt-2'>
            <h2 className="testimonial_title">About US</h2>
            <h4>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam,
              eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo"</h4>
          </Col>
          <Col lg='12 mt-5'>
            <h1>Testimonials</h1>
            <Testimonials />
          </Col>
        </Row>
      </Container>
    </section>
    {/*----------Testimonials section end--------*/}
  </>

};

export default Home;