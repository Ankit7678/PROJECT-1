import React from 'react'
import { Container, Row, Col,Button } from 'reactstrap';
import '../styles/course.css';

const course =  {
    title: "Learn key life lessons from the Gita: Mind control and conflict resolution",
    fee: {
      amount: 5000,
      currency: "INR",
    }
  }
const Course = () => {
    return (
        <div>
            <section>
                <Container>
                    <Row>
                        <Col lg='12'>
                            <div className="Course__page align-item-center justify-content-center">
                                <div className='Course__Container align-item-center justify-content-center'>
                                <h1>Course fee</h1>
                                <p>{course.fee.currency} {course.fee.amount}</p>
                                <p>What included:</p>
                                <div className="Notice__display d-flex">
                                    <div className='Notice__name d-flex align-items-center gap-4'>
                                        <i class='ri-check-line'></i><p>5 on-demand videos</p>
                                    </div>

                                    <div className='Notice__name d-flex align-items-center gap-4'>
                                        <i class='ri-check-line'></i><p>2 livestream videos</p>
                                    </div>

                                    <div className='Notice__name d-flex align-items-center gap-4'>
                                        <i class='ri-check-line'></i><p>Live O&A session with Nityanand charan Das </p>
                                    </div>

                                    <div className='Notice__name d-flex align-items-center gap-4'>
                                        <i class='ri-check-line'></i><p>An active Whatsapp community</p>
                                    </div>
                                </div>
                                <Button className='btn primary__btn w-50'>
                                    <a href='/register'>Register today</a>
                                </Button> 
                                 
                                </div>
                               
                            </div>


                        </Col>
                    </Row>
                </Container>

            </section>
        </div>
    )
}

export default Course
