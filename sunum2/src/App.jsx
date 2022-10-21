import Login from "./view/layout/Login";
import './App.css';
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Dashboard from "./view/layout/Dashboard";


function App() {

  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(false);

  const login = (eMail, password) => {

    if (eMail === 'dgpays@mail.com' && password === '123') {

      setIsLogin(true);

    }
  }

  useEffect(() => {

    console.log('hello');

  }, [])





  return (
    <>
      {isLogin == false ? <Login login={login} /> : <Dashboard />}

    </>
  );
}

export default App;
