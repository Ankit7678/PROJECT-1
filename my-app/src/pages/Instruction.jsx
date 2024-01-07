import React from 'react';
import { Container, Row, Col } from 'reactstrap';



const Instruction = () => {
  return (
    <div>
      <section>
        <Container>
          <Row>
            <Col lg="12">
            <div className="instruction-container">
      <h1>Instructions</h1>
      <div className='Inst_col'>
      <span>Step 1: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
      </div>

      <div className='Inst_col'>
      <span>Step 2: Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</span>
      </div>

      <div className='Inst_col'>
      <span>Step 3: Duis aute irure dolor in reprehenderit in voluptate velit.</span>

      </div>
        
        
        {/* Add more steps as needed */}
      
    </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  )
}

export default Instruction
