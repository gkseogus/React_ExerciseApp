import React from 'react';
import 'antd/dist/antd.css';
import { Breadcrumb, Layout } from 'antd';

const { Content } = Layout;

const HomePage = () => {
  return (
    <div>
      <Content style={{ padding: '0 50px' }}>
      <Breadcrumb style={{ margin: '16px 0' }}>
        운동하죠
      </Breadcrumb>
      <div className="site-layout-content">그러죠 </div>
    </Content>
    </div>
  );
};

export default React.memo(HomePage);