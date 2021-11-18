import { Layout } from 'antd';
import React from 'react';
import { renderRoutes } from 'react-router-config';

import {routesType} from '@/router/config';

import Header from './components/Header';
import Menu from './components/Menu';

const { Content } = Layout;

const BasicLayout: React.FC<{ route: routesType }> = ({ route }) => {
  return (
    <Layout>
      <Header />
      <Layout>
        <Menu />
        <Content style={{ height: 'calc(100vh - 60px)' }}>
          {renderRoutes(route.routes)}
        </Content>
      </Layout>
    </Layout>
  );
};

export default BasicLayout;
