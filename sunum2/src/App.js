
import { Col, Container, ListGroupItem, Row } from 'react-bootstrap';
import CustomerDetail from './view/customer/CustomerDetail';

import CustomerList from './view/customer/CustomerList';

import Header from './view/layout/Header';
import LoginCard from './view/layout/LoginCard';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from './routes/routeConfig';

function App() {
  return (
    <>

      <Header />
      <br/>
      <Container>

      <Routes>
            {
              routeConfig && routeConfig.map((item, key) => {
                return <Route key={key} path={item.path} element={item.element} />

              })
            }
          </Routes>


        {/* <CustomerList/> */}
        {/* <CustomerDetail/> */}
        {/* <Row>
          <Col>  <LoginCard /></Col>
        </Row> */}
      </Container>


    </>
  );
}

export default App;
