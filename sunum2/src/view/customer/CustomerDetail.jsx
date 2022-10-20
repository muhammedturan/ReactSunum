import { useEffect, useState } from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { networkManager } from '../../network/networkManager';
import { useParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { Button } from 'react-bootstrap';

function CustomerDetail() {

    const [detail, setDetail] = useState({});
    const navigate = useNavigate();
    let { id } = useParams();

    const navigateBack = () => {
        navigate(-1);
    }

    useEffect(() => {


        networkManager.getById('customers/' + id).then(result => {

            setDetail(result);
           

        })
            .catch((err) => {
                console.log('Error =>', err)
            })


    }, [])


    return (
        <>
            <h1>Müşteri Detay Ekranı</h1>
            <hr />
            <Row>
                <Form.Label column="lg" lg={2}>
                    Id
                </Form.Label>
                <Col>
                    <Form.Control size="lg" type="text" placeholder="Large text" disabled value={detail.id} />
                </Col>
            </Row>
            <br/>
            <Row>
                <Form.Label column="lg" lg={2}>
                Müşteri Adı
                </Form.Label>
                <Col>
                    <Form.Control size="lg" type="text" placeholder="Large text" disabled value={detail.companyName} />
                </Col>
            </Row>
            <br/>
            <Row>
                <Form.Label column="lg" lg={2}>
                İletişim Adı
                </Form.Label>
                <Col>
                    <Form.Control size="lg" type="text" placeholder="Large text" disabled value={detail.contactName} />
                </Col>
            </Row>
            <br/>
            <Row>
                <Form.Label column="lg" lg={2}>
                İletişim Ünvanı
                </Form.Label>
                <Col>
                    <Form.Control size="lg" type="text" placeholder="Large text" disabled value={detail.contactTitle} />
                </Col>
            </Row>
            <br/>
            <Row>
                <Form.Label column="lg" lg={2}>

                </Form.Label>
                <Col>
                    <Button onClick={() => navigateBack()} variant="danger">Geri</Button>
                   
                </Col>
            </Row>

        </>
    );
}

export default CustomerDetail;