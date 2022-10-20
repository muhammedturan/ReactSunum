import { useState } from "react";
import { Alert } from "react-bootstrap";


function Login(props) {

const [eMail, setEMail] = useState('dgpays@mail.com');
const [password, setPassword] = useState('123')
const [showMessage, setShowMessage] = useState(false)



  return (
    <>
     <div className="Auth-form-container">
      <div className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Giriş</h3>
          {/* {
            if(showMessage)
            {
              <Alert  variant={'danger'}> E-Posta veya Şifrenizi kontrol ediniz !!! </Alert>
            }
          } */}
        
          <div className="form-group mt-3">
            <label>E-Posta Adresi</label>
            <input
              type="email"
              className="form-control mt-1"
              defaultValue={eMail}
              onChange = {(e)=> setEMail(e.target.value)}
              // placeholder="E-Posta adresinizi giriniz"
            />
          </div>
          <div className="form-group mt-3">
            <label>Şifre</label>
            <input
              type="password"
              className="form-control mt-1"
              defaultValue={password}
              onChange={(e)=> setPassword(e.target.value)}
              // placeholder="Enter password"
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button onClick={()=>props.login(eMail,password)} 
                    className="btn btn-primary">
              Giriş
            </button>
          </div>
          <p className="forgot-password text-right mt-2">
            Şifremi unuttum <a href="#">:(</a>
          </p>
        </div>
      </div>
    </div>
    </>
  );
}

export default Login;