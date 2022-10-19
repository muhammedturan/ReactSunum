import React from 'react'
import 'antd/dist/antd.css'
import { Layout } from 'antd';
import Footer from './view/layout/Footer';
import Header from './view/layout/Header';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from './routes/routeConfig';

const { Content } = Layout;


function App() {
  return (
    <>


      <Layout>

        <Header />

        <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
          <div className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>
          <Routes>
            {
              routeConfig && routeConfig.map((item, key) => {
                return <Route key={key} path={item.path} element={item.element} />

              })
            }
          </Routes>
          </div>

        

        </Content>
        <Footer />

      </Layout>
    </>
  )
}

export default App;
