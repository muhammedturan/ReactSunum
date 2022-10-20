import { useEffect, useState } from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { networkManager } from '../../network/networkManager';
import { useParams } from 'react-router-dom';
import { Button } from 'react-bootstrap';

function UpdateCustomer() {

    // const [detail, setDetail] = useState({});
    const [companyId, setCompanyId] = useState('');
    const [companyName, setCompanyName] = useState('');
    const [contactName, setContactName] = useState('');
    const [contactTitle, setContactTitle] = useState('');

    let { id } = useParams();

    const updateCustomer = () => {

        let newCustomer = {
            id: companyId,
            companyName: companyName,
            contactName: contactName,
            contactTitle: contactTitle
        }

        console.log(newCustomer);
        networkManager.update('/customers/' + id, newCustomer).then(result => {

          console.log('result =>', result)
        }).catch((err) => {
            console.log('Error =>', err)
        })

    }

    useEffect(() => {


        networkManager.getById('customers/' + id).then(result => {

            setCompanyId(result.id);
            setCompanyName(result.companyName);
            setContactName(result.contactName);
            setContactTitle(result.contactTitle);
           

        })
            .catch((err) => {
                console.log('Error =>', err)
            })


    }, [])


    return (
        <>
            <h1>Müşteri Düzenleme Ekranı</h1>
            <hr />
            <Row>
                <Form.Label column="lg" lg={2}>
                    Id
                </Form.Label>
                <Col>
                    <Form.Control size="lg" type="text"  onChange={(e) => setCompanyId(e.target.value)} value={companyId} />
                </Col>
            </Row>
            <br/>
            <Row>
                <Form.Label column="lg" lg={2}>
                Müşteri Adı
                </Form.Label>
                <Col>
                    <Form.Control size="lg" type="text" onChange={(e) => setCompanyName(e.target.value)}  value={companyName} />
                </Col>
            </Row>
            <br/>
            <Row>
                <Form.Label column="lg" lg={2}>
                İletişim Adı
                </Form.Label>
                <Col>
                    <Form.Control size="lg" type="text" onChange={(e) => setContactName(e.target.value)}  value={contactName} />
                </Col>
            </Row>
            <br/>
            <Row>
                <Form.Label column="lg" lg={2}>
                İletişim Ünvanı
                </Form.Label>
                <Col>
                    <Form.Control size="lg" type="text" onChange={(e) => setContactTitle(e.target.value)}  value={contactTitle} />
                </Col>
            </Row>
            <br/>
            <Row>
                <Form.Label column="lg" lg={2}>

                </Form.Label>
                <Col>
                    <Button onClick={() => updateCustomer()} variant="danger">Kaydet</Button>
                    <Button variant="secondary">Vazgeç</Button>
                </Col>
            </Row>

        </>
    );
}

export default UpdateCustomer;