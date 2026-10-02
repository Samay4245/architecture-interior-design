import React, { useState } from 'react';
import { Container, Row, Col, Modal } from 'react-bootstrap';

const Gallery = () => {
  const [filter, setFilter] = useState('All');
  const [showModal, setShowModal] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);

  const categories = ['All', 'Living Room', 'Kitchen', 'Bedroom', 'Office', 'Exterior', 'Bathroom', 'Architecture', 'Interior', 'Construction'];

  const images = [
    { id: 1, category: 'Living Room', url: '/assets/project-1.jpeg', caption: 'Modern Living Room Design' },
    { id: 2, category: 'Architecture', url: '/assets/project-2.jpeg', caption: 'Residential Exterior' },
    { id: 3, category: 'Interior', url: '/assets/project-3.jpeg', caption: 'Luxury Bedroom' },
    { id: 4, category: 'Construction', url: '/assets/project-4.jpeg', caption: 'Site Execution' },
    { id: 5, category: 'Kitchen', url: '/assets/project-5.jpeg', caption: 'Modular Kitchen' },
    { id: 6, category: 'Office', url: '/assets/project-1.jpeg', caption: 'Corporate Workspace' },
  ];

  const filteredImages = filter === 'All' ? images : images.filter(img => img.category === filter);

  const openLightbox = (img) => {
    setCurrentImage(img);
    setShowModal(true);
  };

  const closeLightbox = () => {
    setShowModal(false);
    setCurrentImage(null);
  };

  return (
    <>
      <section className="py-5" style={{ backgroundColor: 'var(--primary-color)', color: 'white' }}>
        <Container className="text-center py-4">
          <h1 className="display-4 fw-bold text-uppercase mb-3" style={{ color: 'white' }}>Gallery</h1>
          <p className="lead mx-auto" style={{ maxWidth: '700px', color: 'var(--text-muted)' }}>
            A showcase of our finest work in architecture, interior design, and construction.
          </p>
        </Container>
      </section>

      <section className="section-padding">
        <Container>
          {/* Filters */}
          <div className="d-flex flex-wrap justify-content-center gap-2 mb-5">
            {categories.map((cat, idx) => (
              <button 
                key={idx}
                className={`btn ${filter === cat ? 'btn-premium' : 'btn-premium-outline'}`}
                style={{ padding: '6px 15px', fontSize: '0.8rem' }}
                onClick={() => setFilter(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          <Row>
            {filteredImages.map((img) => (
              <Col lg={4} md={6} className="mb-4" key={img.id}>
                <div 
                  className="gallery-item position-relative overflow-hidden cursor-pointer" 
                  onClick={() => openLightbox(img)}
                  style={{ height: '300px', cursor: 'pointer' }}
                >
                  <img 
                    src={img.url} 
                    alt={img.caption} 
                    className="w-100 h-100" 
                    style={{ objectFit: 'cover', transition: 'transform 0.5s ease' }} 
                  />
                  <div className="gallery-overlay">
                    <h5 className="text-white text-center px-3 m-0">{img.caption}</h5>
                  </div>
                </div>
              </Col>
            ))}
          </Row>

          {filteredImages.length === 0 && (
            <div className="text-center py-5">
              <h4 className="text-muted">No images found in this category.</h4>
            </div>
          )}
        </Container>
      </section>

      {/* Lightbox Modal */}
      <Modal show={showModal} onHide={closeLightbox} size="lg" centered className="lightbox-modal">
        <Modal.Body className="p-0 position-relative bg-transparent text-center">
          <button 
            onClick={closeLightbox} 
            className="btn-close btn-close-white position-absolute top-0 end-0 m-3" 
            style={{ zIndex: 1050 }}
            aria-label="Close"
          ></button>
          {currentImage && (
            <>
              <img src={currentImage.url} alt={currentImage.caption} className="img-fluid" style={{ maxHeight: '85vh', width: 'auto' }} />
              <div className="p-3 bg-dark text-white text-center">
                <p className="m-0">{currentImage.caption}</p>
              </div>
            </>
          )}
        </Modal.Body>
      </Modal>

      <style>{`
        .gallery-item:hover img {
          transform: scale(1.1);
        }
        .gallery-overlay {
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
          background: rgba(0,0,0,0.6);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        .gallery-item:hover .gallery-overlay {
          opacity: 1;
        }
        .lightbox-modal .modal-content {
          background-color: transparent;
          border: none;
        }
      `}</style>
    </>
  );
};

export default Gallery;
