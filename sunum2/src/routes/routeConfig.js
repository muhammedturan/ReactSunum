import AddCustomer from "../view/customer/AddCustomer";
import CustomerDetail from "../view/customer/CustomerDetail";
import CustomerList from "../view/customer/CustomerList";
import UpdateCustomer from "../view/customer/UpdateCustomer";
import Dashboard from "../view/layout/Dashboard";
import Index from "../view/layout/Index";
import Login from "../view/layout/Login";

export const routeConfig =
    [
        {
            path: '/',
            element: <Index />
        },
        // {
        //     path: '/dashboard',
        //     element: <Dashboard />
        // },
        {
            path: '/customers',
            element: <CustomerList />
        },

        {
            path: '/addcustomer',
            element: <AddCustomer />
        },
        {
            path: '/customers/detail/:id',
            element: <CustomerDetail />
        },
        {
            path: '/customers/update/:id',
            element: <UpdateCustomer />
        },


    ]