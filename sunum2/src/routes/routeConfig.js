import AddCustomer from "../view/customer/AddCustomer";
import CustomerDetail from "../view/customer/CustomerDetail";
import CustomerList from "../view/customer/CustomerList";
import UpdateCustomer from "../view/customer/UpdateCustomer";

export const routeConfig =
    [
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