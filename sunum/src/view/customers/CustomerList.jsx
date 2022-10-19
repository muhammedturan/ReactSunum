import React, { useEffect, useState } from 'react'
import { networkManager } from '../../network/networkManager';
import { Button, Table } from 'antd';

function CustomerList() {

    const [customers, setCustomers] = useState([]);
    const deleteCustomer = (id) => {
        console.log(id);
    }

    useEffect(() => {


        networkManager.getAll('customers')
            .then(result => {
                setCustomers(result)
            })
            .catch((err) => {
                console.log('Error =>', err)
            })

    }, [])


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
            title: 'Delete',
            dataIndex: 'id',
            render: (id) => <Button onClick={() => deleteCustomer(id)} type='primary' danger>Delete</Button>
        }
        ,
        {
            title: 'Detay',
            dataIndex: 'id',
            render: () => <Button type='primary'>Detay</Button>
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