import { Container } from "react-bootstrap"
import { Route, Routes } from "react-router-dom"
import { routeConfig } from "../../routes/routeConfig"
import Header from "./Header"




function Dashboard() {
  return (
    <>

<Header />
      <br/>
      <Container>
           <Routes>
            {
              routeConfig && routeConfig.map((item, key) => {
                return <Route key={key} path={item.path} element={item.element} />
              })
            }
          </Routes>
      </Container>

    </>
  )
}

export default Dashboard