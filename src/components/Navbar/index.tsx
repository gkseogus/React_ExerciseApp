import React from 'react';
import 'antd/dist/antd.css';
import { Layout, Menu } from 'antd';
import styled from 'styled-components';

const MenuFont = styled.h1`
 font-family: 'Rubik Bubbles', cursive;
 padding: -5px;
`

const { Header, Footer } = Layout;

const Navbar = () => {


  return (
    <Layout className='layout'>
    <Header style={{ 
      position: 'fixed', 
      zIndex: 1, 
      width: '100%',
      background:'linear-gradient(to right top, #94eb09, #000000)',
      height: '74.5px'
      }}>
      <div className='logo' />
      <Menu theme='dark' mode='horizontal' defaultSelectedKeys={['2']}
        style={{
          background: 'linear-gradient(to right top, #94eb09, #000000)',
        }}
      >
        <Menu.Item key='1'>
          <MenuFont>
            Home
          </MenuFont>
        </Menu.Item>
        <Menu.Item key='2'>
          <MenuFont>
            Routine
          </MenuFont>
        </Menu.Item>
      </Menu>
    </Header>
    <Footer style={{ textAlign: 'center' }}>운동 사이트</Footer>
  </Layout>
  );
};

export default React.memo(Navbar);