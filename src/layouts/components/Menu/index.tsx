import React from 'react';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';
import routes, { routesType } from '@/router/config';
import styles from './index.module.less';

const { Sider } = Layout;
const { SubMenu } = Menu;

const FilterRoutes = (arr: routesType[]): routesType[] =>
  arr.find((n) => n.path === '/')?.routes || [];

const Header: React.FC = () => {

  const sysRoutes = FilterRoutes(routes);

  return (
    <Sider>
      <Menu theme="light" mode="inline" className={styles.menu}>
        {sysRoutes.map((item) => {
          if (item.routes) {
            return (
              <SubMenu key={item.path} title={item.title}>
                {
                  item.routes.map(v => {
                    return <Menu.Item key={v.path}>
                      <Link to={v.path}>{v.title}</Link>
                    </Menu.Item>
                  })
                }
              </SubMenu>
            )
          }
          return (
            <Menu.Item key={item.path}>
              <Link to={item.path}>{item.title}</Link>
            </Menu.Item>
          )
        })}
      </Menu>
    </Sider>
  );
};
export default Header;
