// import AddCustomer from "../view/customer/AddCustomer";
import CustomerDetail from "../view/customer/CustomerDetail";
import CustomerList from "../view/customer/CustomerList";

export const routeConfig = 
[
    {
        path:'/',
        element:<CustomerList/>
    },
    // {
    //     path:'/addcustomer',
    //     element:<AddCustomer/>
    // },    
    {
        path:'/customers/detail/:id',
        element:<CustomerDetail/>
    },
   

]