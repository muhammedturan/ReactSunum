import { useEffect, useState } from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { Button } from 'react-bootstrap';
import { networkManager } from '../../network/networkManager';
import { useNavigate } from "react-router-dom";

function AddCustomer() {

    const [id, setId] = useState('');
    const [companyName, setCompanyName] = useState('');
    const [contactName, setContactName] = useState('');
    const [contactTitle, setContactTitle] = useState('');
    // let { id } = useParams();

    const navigate = useNavigate();
    const addCustomer = () => {

        let newCustomer = {
            id: id,
            companyName: companyName,
            contactName: contactName,
            contactTitle: contactTitle
        }

        console.log(newCustomer);
        networkManager.add('/customers', newCustomer).then(result => {
  
            navigate('/customers');
        }).catch((err) => {
            console.log('Error =>', err)
        })

    }

    return (
        <>
            <h1>Müşteri Ekleme Ekranı</h1>
            <hr />
            <Row>
                <Form.Label column="lg" lg={2}>
                    Id
                </Form.Label>
                <Col>
                    <Form.Control size="lg" type="text" onChange={(e) => setId(e.target.value)} value={id} />
                </Col>
            </Row>
            <br />
            <Row>
                <Form.Label column="lg" lg={2}>
                    Müşteri Adı
                </Form.Label>
                <Col>
                    <Form.Control size="lg" type="text" onChange={(e) => setCompanyName(e.target.value)} value={companyName} />
                </Col>
            </Row>
            <br />
            <Row>
                <Form.Label column="lg" lg={2}>
                    İletişim Adı
                </Form.Label>
                <Col>
                    <Form.Control size="lg" type="text" onChange={(e) => setContactName(e.target.value)} value={contactName} />
                </Col>
            </Row>
            <br />
            <Row>
                <Form.Label column="lg" lg={2}>
                    İletişim Ünvanı
                </Form.Label>
                <Col>
                    <Form.Control size="lg" type="text" onChange={(e) => setContactTitle(e.target.value)} value={contactTitle} />
                </Col>
            </Row>
            <br />
            <Row>
                <Form.Label column="lg" lg={2}>

                </Form.Label>
                <Col>
                    <Button onClick={() => addCustomer()} variant="danger">Kaydet</Button>
                    <Button variant="secondary">Vazgeç</Button>
                </Col>
            </Row>

        </>
    );
}

export default AddCustomer;