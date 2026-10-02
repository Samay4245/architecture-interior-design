import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Container, Row, Col, Badge, Modal } from 'react-bootstrap';
import { FaMapMarkerAlt, FaCheck, FaArrowLeft, FaExpandArrowsAlt } from 'react-icons/fa';

const ProjectDetails = () => {
  const { id } = useParams();
  const [showModal, setShowModal] = useState(false);
  const [currentImage, setCurrentImage] = useState('');

  // Simulated project database
  const projectsDB = {
    1: { name: 'Project 01', category: 'Architecture', location: 'Indore, MP', image: '/assets/project-1.jpeg', year: '2025', client: 'Private Client', status: 'Completed', description: 'A luxurious modern architectural marvel designed with open spaces, natural lighting, and premium materials. This project focused on blending contemporary aesthetics with maximum functional utility.', gallery: ['/assets/project-1.jpeg', '/assets/project-2.jpeg', '/assets/project-3.jpeg'] },
    2: { name: 'Project 02', category: 'Interior', location: 'Bhopal, MP', image: '/assets/project-2.jpeg', year: '2024', client: 'Corporate Firm', status: 'Completed', description: 'High-end interior design for a sprawling corporate space. The goal was to create an inspiring environment for employees using ergonomic furniture and vibrant color palettes.', gallery: ['/assets/project-2.jpeg', '/assets/project-4.jpeg', '/assets/project-5.jpeg'] },
    3: { name: 'Project 03', category: 'Residential', location: 'Indore, MP', image: '/assets/project-3.jpeg', year: '2025', client: 'Mr. Sharma', status: 'Completed', description: 'Complete residential design focusing on warmth and luxury. The project involved custom furniture design, modular kitchen setup, and premium flooring throughout the house.', gallery: ['/assets/project-3.jpeg', '/assets/before-after.jpeg', '/assets/hero-image.jpeg'] },
    4: { name: 'Project 04', category: 'Commercial', location: 'Indore, MP', image: '/assets/project-4.jpeg', year: '2023', client: 'Retail Chain', status: 'Completed', description: 'A state-of-the-art commercial shopping complex built with heavy-duty construction standards and an appealing modern facade.', gallery: ['/assets/project-4.jpeg', '/assets/project-1.jpeg', '/assets/project-2.jpeg'] },
    5: { name: 'Project 05', category: 'Construction', location: 'Ujjain, MP', image: '/assets/project-5.jpeg', year: '2024', client: 'Hospitality Group', status: 'Completed', description: 'End-to-end construction execution for a premium boutique hotel. Detailed attention was paid to structural safety and aesthetic finishes.', gallery: ['/assets/project-5.jpeg', '/assets/project-3.jpeg', '/assets/hero-image.jpeg'] },
    6: { name: 'Project 06', category: 'Renovation', location: 'Indore, MP', image: '/assets/project-1.jpeg', year: '2026', client: 'Private Client', status: 'Ongoing', description: 'Transforming an outdated 90s villa into a modern minimalist home. The project involves structural reinforcement and complete interior remodeling.', gallery: ['/assets/project-1.jpeg', '/assets/before-after.jpeg', '/assets/project-4.jpeg'] },
  };

  const project = projectsDB[id] || projectsDB[1]; // Fallback to project 1 if not found

  const openFullScreen = (img) => {
    setCurrentImage(img);
    setShowModal(true);
  };

  return (
    <>
      {/* Hero / Cover Image */}
      <section className="position-relative" style={{ height: '70vh', backgroundColor: '#000' }}>
        <img 
          src={project.image} 
          alt={project.name} 
          style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.6 }} 
        />
        <div className="position-absolute" style={{ bottom: '40px', left: '10%', zIndex: 2, color: 'white' }}>
          <Link to="/projects" className="text-white text-decoration-none mb-3 d-inline-block">
            <FaArrowLeft className="me-2"/> Back to Projects
          </Link>
          <h1 className="display-3 fw-bold text-uppercase">{project.name}</h1>
          <h4 className="fw-light" style={{ color: 'var(--accent-color)' }}>
            <FaMapMarkerAlt className="me-2"/> {project.location}
          </h4>
        </div>
        <button 
          className="btn btn-outline-light position-absolute" 
          style={{ bottom: '40px', right: '10%' }}
          onClick={() => openFullScreen(project.image)}
        >
          <FaExpandArrowsAlt className="me-2"/> View Fullscreen
        </button>
      </section>

      {/* Project Info */}
      <section className="section-padding">
        <Container>
          <Row>
            <Col lg={8} className="mb-5 mb-lg-0">
              <h2 className="fw-bold mb-4">Project Overview</h2>
              <p className="lead text-muted mb-4" style={{ lineHeight: '1.8' }}>
                {project.description}
              </p>
              
              <h4 className="fw-bold mt-5 mb-4">Key Highlights</h4>
              <ul className="list-unstyled">
                <li className="mb-3 d-flex align-items-center"><FaCheck className="text-accent me-3" color="var(--accent-color)"/> Premium material selection and finishing</li>
                <li className="mb-3 d-flex align-items-center"><FaCheck className="text-accent me-3" color="var(--accent-color)"/> Modern design adhering to structural safety standards</li>
                <li className="mb-3 d-flex align-items-center"><FaCheck className="text-accent me-3" color="var(--accent-color)"/> Delivered on time with complete client satisfaction</li>
              </ul>
            </Col>
            
            <Col lg={4}>
              <div className="bg-light p-5 shadow-sm">
                <h4 className="fw-bold mb-4 border-bottom pb-3">Details</h4>
                <div className="mb-3">
                  <span className="text-muted d-block small text-uppercase fw-bold">Category</span>
                  <span className="fs-5">{project.category}</span>
                </div>
                <div className="mb-3">
                  <span className="text-muted d-block small text-uppercase fw-bold">Client</span>
                  <span className="fs-5">{project.client}</span>
                </div>
                <div className="mb-3">
                  <span className="text-muted d-block small text-uppercase fw-bold">Year</span>
                  <span className="fs-5">{project.year}</span>
                </div>
                <div className="mb-4">
                  <span className="text-muted d-block small text-uppercase fw-bold">Status</span>
                  <Badge bg={project.status === 'Completed' ? 'success' : 'warning'} className="fs-6 mt-1">
                    {project.status}
                  </Badge>
                </div>
                
                <Link to="/contact#quote" className="btn btn-premium w-100 mt-3">Start Similar Project</Link>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Project Gallery */}
      <section className="section-padding bg-light">
        <Container>
          <div className="text-center mb-5">
            <h2 className="section-title">Project Gallery</h2>
          </div>
          <Row>
            {project.gallery.map((img, idx) => (
              <Col md={4} key={idx} className="mb-4">
                <div 
                  className="shadow-sm rounded overflow-hidden cursor-pointer" 
                  style={{ height: '250px', cursor: 'pointer' }}
                  onClick={() => openFullScreen(img)}
                >
                  <img 
                    src={img} 
                    alt={`Gallery ${idx}`} 
                    className="w-100 h-100" 
                    style={{ objectFit: 'cover', transition: 'transform 0.3s ease' }} 
                    onMouseOver={e => e.currentTarget.style.transform = 'scale(1.05)'}
                    onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
                  />
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Fullscreen Image Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)} size="xl" centered className="lightbox-modal">
        <Modal.Body className="p-0 position-relative bg-transparent text-center">
          <button 
            onClick={() => setShowModal(false)} 
            className="btn-close btn-close-white position-absolute top-0 end-0 m-3" 
            style={{ zIndex: 1050 }}
            aria-label="Close"
          ></button>
          {currentImage && (
            <img src={currentImage} alt="Fullscreen View" className="img-fluid" style={{ maxHeight: '90vh', width: 'auto', boxShadow: '0 0 20px rgba(0,0,0,0.5)' }} />
          )}
        </Modal.Body>
      </Modal>

      <style>{`
        .lightbox-modal .modal-content {
          background-color: transparent;
          border: none;
        }
      `}</style>
    </>
  );
};

export default ProjectDetails;
