import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Process = () => {
  const steps = [
    { num: '01', title: 'Consultation', desc: 'Initial meeting to understand your vision, requirements, and budget.' },
    { num: '02', title: 'Site Visit', desc: 'Detailed analysis of the site to evaluate potential and constraints.' },
    { num: '03', title: 'Concept & Planning', desc: 'Developing initial architectural layouts and interior design concepts.' },
    { num: '04', title: 'Design & 3D Visualization', desc: 'Creating detailed 3D models so you can visualize the final outcome.' },
    { num: '05', title: 'Material Selection', desc: 'Curating the finest materials, textures, and finishes for the project.' },
    { num: '06', title: 'Execution', desc: 'Strict supervision and construction adhering to timelines and quality standards.' },
    { num: '07', title: 'Final Handover', desc: 'Delivering the completed project, ready for you to move in and experience.' }
  ];

  return (
    <>
      <section className="py-5" style={{ backgroundColor: 'var(--primary-color)', color: 'white' }}>
        <Container className="text-center py-4">
          <h1 className="display-4 fw-bold text-uppercase mb-3" style={{ color: 'white' }}>Our Process</h1>
          <p className="lead mx-auto" style={{ maxWidth: '700px', color: 'var(--text-muted)' }}>
            A systematic and transparent approach from concept to completion.
          </p>
        </Container>
      </section>

      <section className="section-padding position-relative">
        {/* Line for timeline */}
        <div className="d-none d-lg-block position-absolute" style={{ top: '50%', left: '10%', right: '10%', height: '2px', backgroundColor: 'var(--bg-stone)', zIndex: -1 }}></div>
        
        <Container>
          <div className="d-flex flex-column flex-lg-row justify-content-between align-items-center align-items-lg-start gap-4">
            {steps.map((step, idx) => (
              <div key={idx} className="text-center flex-fill position-relative" style={{ minWidth: '130px', maxWidth: '250px' }}>
                <div 
                  className="rounded-circle d-flex align-items-center justify-content-center mx-auto mb-4 bg-white shadow-sm" 
                  style={{ width: '80px', height: '80px', border: '3px solid var(--accent-color)', color: 'var(--primary-color)', fontSize: '1.5rem', fontWeight: 'bold' }}
                >
                  {step.num}
                </div>
                <h6 className="fw-bold text-uppercase">{step.title}</h6>
                <p className="text-muted small px-2 d-none d-lg-block">{step.desc}</p>
                <p className="text-muted small d-lg-none">{step.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
};

export default Process;
