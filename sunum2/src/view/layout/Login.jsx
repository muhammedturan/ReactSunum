import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Login() {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Şifre</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>    
      <Button variant="primary" type="submit">
        Giriş
      </Button>
   
    </Form>
  );
}

export default Login;