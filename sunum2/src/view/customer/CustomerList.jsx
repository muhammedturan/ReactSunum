import Table from 'react-bootstrap/Table';
import React, { useEffect, useState } from 'react'
import { networkManager } from '../../network/networkManager';
import { useNavigate } from "react-router-dom";
import { Button } from 'react-bootstrap';


function CustomerList() {


    const navigate = useNavigate();
    const [customers, setCustomers] = useState([]);
    const [orderById, setOrderById] = useState(true)
    const [orderByName, setOrderByName] = useState(true)
    const deleteCustomer = (id) => {

        networkManager.delete('customers/' + id).then(result => {
            getCustomers();
        })
            .catch((err) => {
                console.log('Error =>', err)
            })


    }
    const detailCustomer = (id) => {
        navigate('/customers/detail/' + id);
    }

    const updateCustomer = (id) => {
        navigate('/customers/update/' + id);
    }

    useEffect(() => {
        getCustomers();
    }, [])


    const getCustomers = () => {

        networkManager.getAll('customers')
            .then(result => {

                setCustomers(result)
            })
            .catch((err) => {
                console.log('Error =>', err)
            })

    }
    const shortById = () => {
        if (orderById) {
            customers.sort((a, b) => a.id.localeCompare(b.id));
        }
        else {
            customers.sort((a, b) => b.id.localeCompare(a.id));

        }
        setOrderById(!orderById);
        setCustomers([...customers]);
    }
    const shortByName = () => {
        if (orderByName) {
            customers.sort((a, b) => a.companyName.localeCompare(b.companyName));
        }
        else {
            customers.sort((a, b) => b.companyName.localeCompare(a.companyName));

        }
        setOrderByName(!orderByName);
        setCustomers([...customers]);
    }

    return (

        <>
            <h1>Müşteri Listesi</h1>
            <hr></hr>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th onClick={() => shortById()} style={{ color: 'tomato', cursor: 'pointer' }}>Id</th>
                        <th onClick={() => shortByName()} style={{ color: 'tomato', cursor: 'pointer' }}>Müşteri Adı</th>
                        <th>İletişim Adı</th>
                        <th>İletişim Ünvanı</th>
                        <th>Sil</th>
                        <th>Detay</th>
                        <th>Düzenle</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        customers && customers.map((item, index) => {
                            return <tr key={item.id}>
                                <td> {item.id}</td>
                                <td> {item.companyName}</td>
                                <td> {item.contactName}</td>
                                <td> {item.contactTitle}</td>
                                <td> <Button onClick={() => deleteCustomer(item.id)}  variant="danger" >Sil</Button></td>
                                <td> <Button onClick={() => detailCustomer(item.id)}  variant="info" >Detay</Button></td>
                                <td> <Button onClick={() => updateCustomer(item.id)}  variant="warning" >Düzenle</Button></td>
                            </tr>
                        })
                    }
                </tbody>
            </Table>
        </>
    );
}

export default CustomerList