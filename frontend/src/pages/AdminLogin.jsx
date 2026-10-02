import React, { useState } from 'react';
import { Container, Card, Form, Button, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const AdminLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === 'admin' && password === 'admin123') {
      localStorage.setItem('admin_token', 'sample-jwt-token');
      navigate('/admin/dashboard');
    } else {
      setError('Invalid credentials');
    }
  };

  return (
    <div style={{ backgroundColor: 'var(--bg-stone)', minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
      <Container>
        <div className="mx-auto" style={{ maxWidth: '400px' }}>
          <div className="text-center mb-4">
            <h3 className="fw-bold text-uppercase" style={{ fontFamily: 'var(--font-heading)' }}>
              SHIV SHAKTI
            </h3>
            <p className="text-muted text-uppercase" style={{ letterSpacing: '2px', fontSize: '0.8rem' }}>Admin Panel</p>
          </div>
          
          <Card className="border-0 shadow-lg p-4 rounded-0">
            <Card.Body>
              <h4 className="fw-bold mb-4 text-center">Login</h4>
              {error && <Alert variant="danger" className="rounded-0">{error}</Alert>}
              <Form onSubmit={handleLogin}>
                <Form.Group className="mb-3">
                  <Form.Label>Username</Form.Label>
                  <Form.Control 
                    type="text" 
                    className="rounded-0 p-2" 
                    value={username} 
                    onChange={e => setUsername(e.target.value)} 
                    required 
                  />
                </Form.Group>
                <Form.Group className="mb-4">
                  <Form.Label>Password</Form.Label>
                  <Form.Control 
                    type="password" 
                    className="rounded-0 p-2" 
                    value={password} 
                    onChange={e => setPassword(e.target.value)} 
                    required 
                  />
                </Form.Group>
                <Button variant="premium" type="submit" className="w-100 btn-premium">
                  Access Dashboard
                </Button>
              </Form>
            </Card.Body>
          </Card>
          <div className="text-center mt-4">
            <a href="/" className="text-muted text-decoration-none">&larr; Back to Website</a>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AdminLogin;
