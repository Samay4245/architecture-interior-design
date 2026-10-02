import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaMapMarkerAlt, FaDirections, FaPhoneAlt } from 'react-icons/fa';

const Location = () => {
  return (
    <>
      <section className="py-5" style={{ backgroundColor: 'var(--primary-color)', color: 'white' }}>
        <Container className="text-center py-4">
          <h1 className="display-4 fw-bold text-uppercase mb-3" style={{ color: 'white' }}>Our Location</h1>
          <p className="lead mx-auto" style={{ maxWidth: '700px', color: 'var(--text-muted)' }}>
            Find our office easily. We are centrally located in Indore, Madhya Pradesh.
          </p>
        </Container>
      </section>

      <section className="section-padding bg-light">
        <Container>
          <Row className="mb-5">
            <Col lg={4} className="mb-4 mb-lg-0">
              <Card className="h-100 border-0 shadow-sm p-4">
                <Card.Body className="d-flex flex-column justify-content-center text-center">
                  <div className="mb-4 text-accent mx-auto" style={{ color: 'var(--accent-color)' }}>
                    <FaMapMarkerAlt size={50} />
                  </div>
                  <h4 className="fw-bold mb-3">Office Address</h4>
                  <p className="text-muted mb-4" style={{ fontSize: '1.1rem' }}>
                    Mushkhedi, Panchshil Colony,<br/>
                    Indore, Madhya Pradesh, India
                  </p>
                  
                  <h4 className="fw-bold mb-3">Contact</h4>
                  <p className="text-muted mb-4" style={{ fontSize: '1.1rem' }}>
                    <FaPhoneAlt className="me-2 text-accent" style={{ color: 'var(--accent-color)' }} /> 
                    +91 88788 55113
                  </p>

                  <a 
                    href="https://maps.app.goo.gl/btKCR28UkKBnD2wE8" 
                    target="_blank" 
                    rel="noreferrer" 
                    className="btn btn-premium w-100 mt-auto d-flex align-items-center justify-content-center gap-2"
                  >
                    <FaDirections /> Get Directions on Maps
                  </a>
                </Card.Body>
              </Card>
            </Col>
            
            <Col lg={8}>
              <div className="h-100 w-100 shadow-sm rounded overflow-hidden" style={{ minHeight: '500px' }}>
                <iframe 
                  src="https://maps.google.com/maps?q=Mushkhedi,%20Panchshil%20Colony,%20Indore,%20Madhya%20Pradesh,%20India&t=&z=14&ie=UTF8&iwloc=&output=embed" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Shiv Shakti Construction Location"
                ></iframe>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Location;
