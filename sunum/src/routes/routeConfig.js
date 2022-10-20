import AddCustomer from "../view/customers/AddCustomer";
import CustomerDetail from "../view/customers/CustomerDetail";
import CustomerList from "../view/customers/CustomerList";

export const routeConfig = 
[
    {
        path:'/customers',
        element:<CustomerList/>
    },
    {
        path:'/addcustomer',
        element:<AddCustomer/>
    },    
    {
        path:'/customers/detail/:id',
        element:<CustomerDetail/>
    },
   

]