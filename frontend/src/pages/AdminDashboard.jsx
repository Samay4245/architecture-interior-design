import React, { useEffect } from 'react';
import { Container, Row, Col, Nav, Card, Table } from 'react-bootstrap';
import { useNavigate, Routes, Route, Link } from 'react-router-dom';

const AdminDashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('admin_token');
    if (!token) {
      navigate('/admin');
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('admin_token');
    navigate('/admin');
  };

  return (
    <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: '#f4f6f9' }}>
      {/* Sidebar */}
      <div style={{ width: '250px', backgroundColor: 'var(--primary-color)', color: 'white' }}>
        <div className="p-4 text-center border-bottom border-secondary">
          <h5 className="fw-bold m-0" style={{ fontFamily: 'var(--font-heading)' }}>ADMIN PANEL</h5>
        </div>
        <Nav className="flex-column p-3">
          <Nav.Link as={Link} to="/admin/dashboard" className="text-white mb-2">Dashboard</Nav.Link>
          <Nav.Link as={Link} to="/admin/dashboard/projects" className="text-white mb-2">Projects</Nav.Link>
          <Nav.Link as={Link} to="/admin/dashboard/gallery" className="text-white mb-2">Gallery</Nav.Link>
          <Nav.Link as={Link} to="/admin/dashboard/enquiries" className="text-white mb-2">Enquiries</Nav.Link>
          <Nav.Link as={Link} to="/admin/dashboard/settings" className="text-white mb-4">Settings</Nav.Link>
          <Nav.Link onClick={handleLogout} className="text-danger fw-bold">Logout</Nav.Link>
        </Nav>
      </div>

      {/* Main Content */}
      <div style={{ flex: 1, padding: '30px' }}>
        <Routes>
          <Route path="/" element={<DashboardHome />} />
          <Route path="/projects" element={<AdminProjects />} />
          <Route path="/gallery" element={<AdminGallery />} />
          <Route path="/enquiries" element={<AdminEnquiries />} />
          <Route path="/settings" element={<AdminSettings />} />
        </Routes>
      </div>
    </div>
  );
};

const DashboardHome = () => (
  <>
    <h3 className="fw-bold mb-4">Dashboard Overview</h3>
    <Row>
      <Col md={3}>
        <Card className="border-0 shadow-sm rounded-0 mb-4">
          <Card.Body className="text-center p-4">
            <h1 className="fw-bold text-accent">12</h1>
            <p className="text-muted text-uppercase mb-0">Total Projects</p>
          </Card.Body>
        </Card>
      </Col>
      <Col md={3}>
        <Card className="border-0 shadow-sm rounded-0 mb-4">
          <Card.Body className="text-center p-4">
            <h1 className="fw-bold text-accent">5</h1>
            <p className="text-muted text-uppercase mb-0">New Enquiries</p>
          </Card.Body>
        </Card>
      </Col>
      <Col md={3}>
        <Card className="border-0 shadow-sm rounded-0 mb-4">
          <Card.Body className="text-center p-4">
            <h1 className="fw-bold text-accent">34</h1>
            <p className="text-muted text-uppercase mb-0">Gallery Images</p>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </>
);

const AdminProjects = () => (
  <>
    <div className="d-flex justify-content-between align-items-center mb-4">
      <h3 className="fw-bold m-0">Manage Projects</h3>
      <button className="btn btn-premium">Add New Project</button>
    </div>
    <Card className="border-0 shadow-sm rounded-0">
      <Card.Body>
        <Table responsive hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Category</th>
              <th>Location</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Project 01</td>
              <td>Architecture</td>
              <td>Indore</td>
              <td><span className="badge bg-success">Published</span></td>
              <td>
                <button className="btn btn-sm btn-outline-primary me-2">Edit</button>
                <button className="btn btn-sm btn-outline-danger">Delete</button>
              </td>
            </tr>
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  </>
);

const AdminGallery = () => (
  <>
    <div className="d-flex justify-content-between align-items-center mb-4">
      <h3 className="fw-bold m-0">Manage Gallery</h3>
      <button className="btn btn-premium">Upload Image</button>
    </div>
    <p>Gallery management goes here...</p>
  </>
);

const AdminEnquiries = () => (
  <>
    <h3 className="fw-bold mb-4">Enquiries</h3>
    <Card className="border-0 shadow-sm rounded-0">
      <Card.Body>
        <Table responsive hover>
          <thead>
            <tr>
              <th>Date</th>
              <th>Name</th>
              <th>Phone</th>
              <th>Type</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>2026-09-28</td>
              <td>John Doe</td>
              <td>+91 9876543210</td>
              <td>Architecture</td>
              <td><span className="badge bg-warning text-dark">New</span></td>
              <td>
                <button className="btn btn-sm btn-outline-info">View</button>
              </td>
            </tr>
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  </>
);

const AdminSettings = () => (
  <>
    <h3 className="fw-bold mb-4">Settings</h3>
    <p>Update company information, WhatsApp number, Address here...</p>
  </>
);

export default AdminDashboard;
