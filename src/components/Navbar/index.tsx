import React from 'react';
import 'antd/dist/antd.css';
import { Layout, Menu } from 'antd';


const { Header, Footer } = Layout;

const Navbar = () => {


  return (
    <Layout className="layout">
    <Header style={{ 
      position: 'fixed', 
      zIndex: 1, 
      width: '100%',
      background:'linear-gradient(to right top, #94eb09, #000000)' ,
      }}>
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}
        style={{
          background: 'linear-gradient(to right top, #94eb09, #000000)',
        }}
      >
        <Menu.Item key="1"
        style={{

        }}      
        >Home</Menu.Item>
        <Menu.Item key="2"
        style={{

        }}      
        >종목</Menu.Item>
        <Menu.Item key="3"
        style={{

        }}     
        >루틴</Menu.Item>
      </Menu>
    </Header>
    <Footer style={{ textAlign: 'center' }}>운동 사이트</Footer>
  </Layout>
  );
};

export default React.memo(Navbar);