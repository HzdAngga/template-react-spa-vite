import { MenuProps } from 'antd';

export type CTLayoutDashboardSidebarMenuItem =
  Required<MenuProps>['items'][number];

export type TMakeItemProps = {
  label: React.ReactNode;
  key: React.Key;
  icon?: React.ReactNode;
  children?: CTLayoutDashboardSidebarMenuItem[];
  onClick?: MenuProps['onClick'];
};
