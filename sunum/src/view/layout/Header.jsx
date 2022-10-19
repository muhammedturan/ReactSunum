import React from 'react'
import { Layout, Menu } from 'antd';
import { Link} from "react-router-dom";
const { Header: AntdHeader } = Layout;



function Header() {
    return (

        <AntdHeader style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
            <div className="logo" />
            <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={['1']}

            >
                <Menu.Item key={1}><Link to='/admin/customers'>Customers</Link> </Menu.Item>
                <Menu.Item key={2}><Link to='/admin/addcustomer'>Add Customer</Link></Menu.Item>
                <Menu.Item key={3}>Item3</Menu.Item>
                <Menu.Item key={4}>Item4</Menu.Item>
            </Menu>
        </AntdHeader>



    )
}

export default Header