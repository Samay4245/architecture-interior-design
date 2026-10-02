import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaDraftingCompass, FaCouch, FaHardHat, FaHome, FaTools, FaBuilding } from 'react-icons/fa';

const Services = () => {
  const services = [
    {
      icon: <FaDraftingCompass size={40} />,
      title: 'Architecture Design',
      description: 'Comprehensive residential and commercial architectural planning. We blend form and function to create structures that stand the test of time.'
    },
    {
      icon: <FaCouch size={40} />,
      title: 'Interior Design',
      description: 'Modern, personalized interior solutions. We curate spaces that reflect your personality while maximizing comfort and utility.'
    },
    {
      icon: <FaHardHat size={40} />,
      title: 'Construction',
      description: 'End-to-end professional construction and project execution with unyielding focus on quality materials and structural integrity.'
    },
    {
      icon: <FaBuilding size={40} />,
      title: '3D Visualization',
      description: 'Realistic 3D renders and walkthroughs allowing you to visualize and perfect the space before actual execution begins.'
    },
    {
      icon: <FaHome size={40} />,
      title: 'Residential Design',
      description: 'Complete architecture and interior design solutions specifically tailored for modern, luxurious, and comfortable homes.'
    },
    {
      icon: <FaTools size={40} />,
      title: 'Renovation',
      description: 'Transforming existing, outdated spaces into vibrant, modern environments through careful structural and aesthetic upgrades.'
    }
  ];

  return (
    <>
      <section className="py-5" style={{ backgroundColor: 'var(--primary-color)', color: 'white' }}>
        <Container className="text-center py-4">
          <h1 className="display-4 fw-bold text-uppercase mb-3" style={{ color: 'white' }}>Our Services</h1>
          <p className="lead mx-auto" style={{ maxWidth: '700px', color: 'var(--text-muted)' }}>
            We offer a comprehensive suite of design and construction services tailored to your unique needs.
          </p>
        </Container>
      </section>

      <section className="section-padding bg-light">
        <Container>
          <Row>
            {services.map((srv, idx) => (
              <Col lg={4} md={6} className="mb-4" key={idx}>
                <div className="p-5 bg-white h-100 shadow-sm service-card border-bottom border-3 border-transparent" style={{ transition: 'all 0.3s' }}>
                  <div className="text-accent mb-4" style={{ color: 'var(--accent-color)' }}>
                    {srv.icon}
                  </div>
                  <h4 className="fw-bold mb-3">{srv.title}</h4>
                  <p className="text-muted">{srv.description}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <style>{`
        .service-card:hover {
          transform: translateY(-5px);
          border-bottom-color: var(--accent-color) !important;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1) !important;
        }
      `}</style>
    </>
  );
};

export default Services;
