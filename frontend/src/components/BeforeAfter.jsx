import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const BeforeAfter = () => {
  return (
    <section className="section-padding" style={{ backgroundColor: 'var(--bg-stone)' }}>
      <Container>
        <div className="text-center mb-5">
          <span className="section-subtitle">Transformations</span>
          <h2 className="section-title">Before & After</h2>
          <p className="text-muted mx-auto" style={{ maxWidth: '700px' }}>
            Witness the incredible journey of transformation. From raw structures to beautifully finished living spaces.
          </p>
        </div>
        
        <Row className="justify-content-center">
          <Col lg={10}>
            <div className="shadow-lg rounded overflow-hidden">
              <img 
                src="/assets/before-after.jpeg" 
                alt="Construction Transformation - Before, During, After" 
                className="img-fluid w-100" 
                style={{ objectFit: 'cover' }}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default BeforeAfter;
