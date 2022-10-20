import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Login from './Login';

function LoginCard() {
  return (
    <Card>
      <Card.Header>Login</Card.Header>
      <Card.Body>
       <Login/>
      </Card.Body>
    </Card>
  );
}

export default LoginCard;