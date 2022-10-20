import React, { useEffect, useState } from 'react'
import { networkManager } from '../../network/networkManager';
import { Button, Table } from 'antd';
import { SearchOutlined, DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Navigate, useNavigate } from 'react-router-dom';

function CustomerList() {

    const navigate = useNavigate();
    const [customers, setCustomers] = useState([]);
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


    const columns = [

        {
            title: 'Id',
            dataIndex: 'id',
            sorter: (a, b) => a.id.localeCompare(b.id)

        },
        {
            title: 'Name',
            dataIndex: 'companyName',
            sorter: (a, b) => a.companyName.localeCompare(b.companyName)
        },
        {
            title: 'Contact Name',
            dataIndex: 'contactName',
            sorter: (a, b) => a.contactName.localeCompare(b.contactName)
        },
        {
            title: 'Contact Title',
            dataIndex: 'contactTitle'
        }
        ,
        {
            title: 'Silme',
            dataIndex: 'id',
            render: (id) => <Button icon={<DeleteOutlined />} shape="circle" onClick={() => deleteCustomer(id)} type='primary' danger></Button>
        }
        ,
        {
            title: 'Detay',
            dataIndex: 'id',
            render: (id) => <Button onClick={() => detailCustomer(id)} type='primary' shape="circle" icon={<SearchOutlined />}></Button>
        }
        ,
        {
            title: 'Duzenleme',
            dataIndex: 'id',
            render: () => <Button icon={<EditOutlined />} shape="circle" type='primary'></Button>
        }

    ]



    return (
        <>

            <Table rowKey='id' dataSource={customers} columns={columns} pagination={{ pageSize: 10, defaultCurrent: 1 }}>


            </Table>



        </>
    )
}

export default CustomerList