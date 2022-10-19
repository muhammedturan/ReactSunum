import AddCustomer from "../view/customers/AddCustomer";
import CustomerList from "../view/customers/CustomerList";

export const routeConfig = 
[
    {
        path:'/admin/customers',
        element:<CustomerList/>
    },
    {
        path:'/admin/addcustomer',
        element:<AddCustomer/>
    },
   

]