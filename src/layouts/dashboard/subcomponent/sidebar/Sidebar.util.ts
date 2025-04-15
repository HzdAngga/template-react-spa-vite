import type {
  CTLayoutDashboardSidebarMenuItem,
  TMakeItemProps,
} from './Sidebar.type';

export const makeItem = ({
  label,
  key,
  icon,
  children,
  onClick,
}: TMakeItemProps): CTLayoutDashboardSidebarMenuItem => {
  return {
    key,
    icon,
    children,
    label,
    onClick,
  };
};
