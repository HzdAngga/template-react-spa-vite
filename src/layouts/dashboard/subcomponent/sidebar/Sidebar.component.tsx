import { useMemo } from 'react';

import {
  HomeOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  TableOutlined,
} from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import { useLocation, useNavigate } from 'react-router-dom';

import {
  RouteEndpointsCommon,
  RouteEndpointsThings,
} from '@/constants/route-endpoint';
import { useComponentStore } from '@/stores/common';

import { CTLayoutDashboardSidebarMenuItem } from './Sidebar.type';
import { makeItem } from './Sidebar.util';

import './Sidebar.style.scss';

const { Sider } = Layout;

const CTLayoutDashboardSidebar: React.FC = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { isSidebarCollapsed, updateIsSidebarCollapsed } = useComponentStore(
    (state) => ({
      isSidebarCollapsed: state.isSidebarCollapsed,
      updateIsSidebarCollapsed: state.updateIsSidebarCollapsed,
    })
  );

  const currentPath = `/${pathname.split('/')?.[1]}`;

  // * currentOpen below need an adjustment if the route has children.
  const currentOpenMenu = useMemo(() => {
    if (
      (
        [
          RouteEndpointsThings.BASE_PRODUCTS,
          RouteEndpointsThings.BASE_USERS,
        ] as string[]
      ).includes(currentPath)
    )
      return 'things';

    return pathname.split('/')?.[0];
  }, [currentPath, pathname]);

  const menuItems: CTLayoutDashboardSidebarMenuItem[] = [
    makeItem({
      label: 'Homepage',
      key: RouteEndpointsCommon.HOME,
      icon: <HomeOutlined />,
      onClick: () => navigate(RouteEndpointsCommon.HOME),
    }),
    makeItem({
      label: 'Things',
      key: 'things',
      icon: <TableOutlined />,
      children: [
        makeItem({
          label: 'Products',
          key: RouteEndpointsThings.BASE_PRODUCTS,
          onClick: () => navigate(RouteEndpointsThings.BASE_PRODUCTS),
        }),
        makeItem({
          label: 'Users',
          key: RouteEndpointsThings.BASE_USERS,
          onClick: () => navigate(RouteEndpointsThings.BASE_USERS),
        }),
      ],
    }),
  ];

  return (
    <Sider
      className="ct_layout_dashboard__sidebar"
      collapsed={isSidebarCollapsed}
      collapsible
      onCollapse={updateIsSidebarCollapsed}
      style={{
        position: 'fixed',
        bottom: 0,
        top: 64,
        left: 0,
        overflow: 'auto',
      }}
      trigger={
        <div className="ct_layout_dashboard__sidebar__trigger">
          {isSidebarCollapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        </div>
      }
      width={240}>
      <Menu
        className="ct_layout_dashboard__sidebar__menu"
        defaultOpenKeys={[currentOpenMenu]}
        selectedKeys={[currentPath]}
        mode="inline"
        items={menuItems}
      />
    </Sider>
  );
};

export default CTLayoutDashboardSidebar;
