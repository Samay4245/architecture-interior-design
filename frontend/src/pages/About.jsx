import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaCheckCircle } from 'react-icons/fa';

const About = () => {
  return (
    <>
      <section className="py-5 position-relative" style={{ backgroundColor: 'var(--primary-color)', color: 'white', minHeight: '40vh', display: 'flex', alignItems: 'center' }}>
        <Container className="text-center position-relative z-1">
          <h1 className="display-4 fw-bold text-uppercase mb-3" style={{ color: 'white' }}>About Us</h1>
          <p className="lead mx-auto" style={{ maxWidth: '700px', color: 'var(--text-muted)' }}>
            Learn about our journey, our philosophy, and the people behind Shiv Shakti Construction.
          </p>
        </Container>
      </section>

      <section className="section-padding">
        <Container>
          <Row className="align-items-center mb-5">
            <Col lg={5} className="mb-5 mb-lg-0">
              <img src="/assets/hero-image.jpeg" alt="Shiv Shakti Construction" className="img-fluid rounded shadow-lg" style={{ height: '600px', width: '100%', objectFit: 'cover' }} />
            </Col>
            <Col lg={6} className="offset-lg-1">
              <span className="section-subtitle">Our Story</span>
              <h2 className="section-title mb-4">Shiv Shakti Construction</h2>
              <p className="text-muted mb-4" style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
                At Shiv Shakti Construction, we do more than just build structures; we create environments that inspire. Based in Indore, Madhya Pradesh, we have established ourselves as a premier architecture, interior design, and construction firm.
              </p>
              <p className="text-muted mb-4" style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
                Founded by <strong>Roopnaryan Sukhla</strong>, our company is built on the principles of integrity, quality, and innovation. With over a decade of experience, we have successfully delivered numerous residential and commercial projects, transforming the visions of our clients into tangible realities.
              </p>
              
              <div className="mt-5">
                <h4 className="fw-bold mb-3">Our Core Values</h4>
                <Row>
                  <Col sm={6} className="mb-3">
                    <div className="d-flex align-items-center">
                      <FaCheckCircle className="text-accent me-2" color="var(--accent-color)" /> <span className="fw-bold">Integrity</span>
                    </div>
                  </Col>
                  <Col sm={6} className="mb-3">
                    <div className="d-flex align-items-center">
                      <FaCheckCircle className="text-accent me-2" color="var(--accent-color)" /> <span className="fw-bold">Innovation</span>
                    </div>
                  </Col>
                  <Col sm={6} className="mb-3">
                    <div className="d-flex align-items-center">
                      <FaCheckCircle className="text-accent me-2" color="var(--accent-color)" /> <span className="fw-bold">Excellence</span>
                    </div>
                  </Col>
                  <Col sm={6} className="mb-3">
                    <div className="d-flex align-items-center">
                      <FaCheckCircle className="text-accent me-2" color="var(--accent-color)" /> <span className="fw-bold">Client Satisfaction</span>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Owner Section */}
      <section className="section-padding bg-light">
        <Container>
          <Row className="align-items-center flex-row-reverse">
            <Col lg={5} className="mb-5 mb-lg-0">
              <img src="/assets/hero-image.jpeg" alt="Roopnaryan Sukhla" className="img-fluid rounded shadow" style={{ height: '500px', width: '100%', objectFit: 'cover' }} />
            </Col>
            <Col lg={6}>
              <span className="section-subtitle">Meet The Founder</span>
              <h2 className="section-title mb-2">Roopnaryan Sukhla</h2>
              <p className="text-muted mb-4 text-uppercase fw-bold letter-spacing-1" style={{ color: 'var(--accent-color)' }}>Managing Director</p>
              <p className="text-muted mb-4" style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
                With a passion for architecture and a keen eye for detail, Roopnaryan Sukhla has led Shiv Shakti Construction to become one of the most trusted names in Indore's construction and interior design landscape.
              </p>
              <p className="text-muted mb-5" style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
                "Our mission is to deliver spaces that are not only aesthetically pleasing but also highly functional. We believe in understanding our client's lifestyle and translating that into the built environment."
              </p>
              <Link to="/contact" className="btn btn-premium">Work With Us</Link>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default About;
