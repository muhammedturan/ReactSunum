import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { networkManager } from '../../network/networkManager';
import { Col, Row } from 'antd';

function CustomerDetail() {


    const [detail, setDetail] = useState({});

    let { id } = useParams();



    useEffect(() => {


        networkManager.getById('customers/' + id).then(result => {

            setDetail(result);
            console.log(result);

        })
            .catch((err) => {
                console.log('Error =>', err)
            })


    }, [])



    return (

        <>

<Row>
      <Col flex={1}>Id</Col>
      <Col flex={4}>{detail.id}</Col>
    </Row>
    <Row>
      <Col flex={1}>companyName</Col>
      <Col flex={4}>{detail.companyName}</Col>
    </Row>
    <Row>
      <Col flex={1}>contactName</Col>
      <Col flex={4}>{detail.contactName}</Col>
    </Row>

            {/* <table style={{border:'1px solid black'}}>
                <tr>
                    <th>Id</th>
                    <tr>{detail.id}</tr>
                </tr>
            </table> */}


        </>

    )
}

export default CustomerDetail