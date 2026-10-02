import React, { useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Projects = () => {
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'Architecture', 'Interior', 'Residential', 'Commercial', 'Construction', 'Renovation'];

  // Temporary projects data (will be fetched from API later)
  const allProjects = [
    { id: 1, name: 'Project 01', category: 'Architecture', location: 'Indore', image: '/assets/project-1.jpeg' },
    { id: 2, name: 'Project 02', category: 'Interior', location: 'Bhopal', image: '/assets/project-2.jpeg' },
    { id: 3, name: 'Project 03', category: 'Residential', location: 'Indore', image: '/assets/project-3.jpeg' },
    { id: 4, name: 'Project 04', category: 'Commercial', location: 'Indore', image: '/assets/project-4.jpeg' },
    { id: 5, name: 'Project 05', category: 'Construction', location: 'Ujjain', image: '/assets/project-5.jpeg' },
    { id: 6, name: 'Project 06', category: 'Renovation', location: 'Indore', image: '/assets/project-1.jpeg' },
  ];

  const filteredProjects = filter === 'All' 
    ? allProjects 
    : allProjects.filter(p => p.category === filter);

  return (
    <>
      {/* Page Header */}
      <section className="py-5" style={{ backgroundColor: 'var(--primary-color)', color: 'white' }}>
        <Container className="text-center py-4">
          <h1 className="display-4 fw-bold text-uppercase mb-3" style={{ color: 'white' }}>Our Projects</h1>
          <p className="lead mx-auto" style={{ maxWidth: '700px', color: 'var(--text-muted)' }}>
            Explore our portfolio of successful architecture, interior, and construction projects.
          </p>
        </Container>
      </section>

      {/* Projects Section */}
      <section className="section-padding">
        <Container>
          {/* Filters */}
          <div className="d-flex flex-wrap justify-content-center gap-2 mb-5">
            {categories.map((cat, idx) => (
              <button 
                key={idx}
                className={`btn ${filter === cat ? 'btn-premium' : 'btn-premium-outline'}`}
                style={{ padding: '8px 20px', fontSize: '0.85rem' }}
                onClick={() => setFilter(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Project Grid */}
          <Row>
            {filteredProjects.map(project => (
              <Col lg={4} md={6} className="mb-4" key={project.id}>
                <Card className="h-100 border-0 rounded-0 overflow-hidden shadow-sm project-card">
                  <div className="overflow-hidden position-relative">
                    <Card.Img variant="top" src={project.image} className="rounded-0 w-100" style={{ height: '280px', objectFit: 'cover', transition: 'transform 0.5s ease' }} />
                    <div className="project-overlay d-flex align-items-center justify-content-center">
                      <Link to={`/projects/${project.id}`} className="btn btn-accent rounded-0">View Details</Link>
                    </div>
                  </div>
                  <Card.Body className="text-center pt-4 pb-4">
                    <p className="text-uppercase mb-2" style={{ color: 'var(--accent-color)', fontSize: '0.8rem', letterSpacing: '1px', fontWeight: '600' }}>{project.category}</p>
                    <Card.Title className="fw-bold mb-1">{project.name}</Card.Title>
                    {project.location && <Card.Text className="text-muted small">{project.location}</Card.Text>}
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>

          {filteredProjects.length === 0 && (
            <div className="text-center py-5">
              <h4 className="text-muted">No projects found in this category.</h4>
            </div>
          )}
        </Container>
      </section>
      
      <style>{`
        .project-card:hover .card-img-top {
          transform: scale(1.05);
        }
        .project-overlay {
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
          background: rgba(0,0,0,0.5);
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        .project-card:hover .project-overlay {
          opacity: 1;
        }
      `}</style>
    </>
  );
};

export default Projects;
