import { useRef, useState } from 'react';

import {
  DownOutlined,
  LogoutOutlined,
  SettingOutlined,
} from '@ant-design/icons';
import { Avatar, Dropdown, Layout } from 'antd';
import cx from 'classnames';
import { Link, useNavigate } from 'react-router-dom';

import imgCompanyLogo from '@/assets/images/img__company_logo.svg';
import kodaService from '@/configs/common/service.config';
import {
  RouteEndpointsAuth,
  RouteEndpointsCommon,
} from '@/constants/route-endpoint';
import { useGetUserInfo } from '@/hooks/api/auth';
import { useAuthStore } from '@/stores/auth';

import './Header.style.scss';

const { Header } = Layout;

const CTLayoutDashboardHeader: React.FC = () => {
  const headerRef = useRef<HTMLElement>(null);
  const navigate = useNavigate();
  const { updateIsAuthenticated, userInfo, updateUserInfo } = useAuthStore(
    (state) => ({
      updateIsAuthenticated: state.updateIsAuthenticated,
      userInfo: state.userInfo,
      updateUserInfo: state.updateUserInfo,
    })
  );

  const [isProfileOpen, setIsProfileOpen] = useState<boolean>(false);

  useGetUserInfo({
    enabled: !userInfo,
    onSuccess: (data) => {
      updateUserInfo({
        avatar: data.avatar,
        name: data.name,
        role: data.role,
      });
    },
  });

  const handleLogout = () => {
    kodaService.removeCredential();
    updateIsAuthenticated(false);
    updateUserInfo(null);
    navigate(RouteEndpointsAuth.LOGIN, { replace: true });
  };

  // #region Dropdown Items
  const dropdownItems = [
    {
      key: 'SETTINGS',
      title: 'Settings',
      label: (
        <p className="ct_layout_dashboard__header__dropdown__items__label">
          Settings
        </p>
      ),
      icon: (
        <div className="ct_layout_dashboard__header__dropdown__items__icon__wrapper">
          <SettingOutlined className="ct_layout_dashboard__header__dropdown__items__icon" />
        </div>
      ),
      onClick: () => {},
    },
    {
      key: 'LOG_OUT',
      title: 'Log Out',
      label: (
        <p className="ct_layout_dashboard__header__dropdown__items__label">
          Log Out
        </p>
      ),
      icon: (
        <div className="ct_layout_dashboard__header__dropdown__items__icon__wrapper">
          <LogoutOutlined className="ct_layout_dashboard__header__dropdown__items__icon" />
        </div>
      ),
      onClick: handleLogout,
    },
  ];
  // #endregion

  return (
    <Header className="ct_layout_dashboard__header" ref={headerRef}>
      <Link to={RouteEndpointsCommon.HOME}>
        <img
          src={imgCompanyLogo}
          alt="Company Logo"
          className="ct_layout_dashboard__header__logo"
        />
      </Link>

      <Dropdown
        className={cx(
          'ct_layout_dashboard__header__dropdown',
          isProfileOpen && 'ct_layout_dashboard__header__dropdown--focused'
        )}
        menu={{
          items: dropdownItems,
          selectedKeys: [],
        }}
        trigger={['click']}
        onOpenChange={setIsProfileOpen}
        placement="bottomRight"
        overlayClassName="ct_layout_dashboard__header__dropdown__container"
        getPopupContainer={(element) => headerRef.current || element}>
        <div className="ct_layout_dashboard__header__dropdown__button">
          <span className="ct_layout_dashboard__header__dropdown__info">
            <Avatar
              className="ct_layout_dashboard__header__dropdown__avatar"
              src={userInfo?.avatar}
            />

            {userInfo?.name}
          </span>
          <DownOutlined
            className={cx(
              'ct_layout_dashboard__header__dropdown__chevron',
              isProfileOpen &&
                'ct_layout_dashboard__header__dropdown__chevron--open'
            )}
          />
        </div>
      </Dropdown>
    </Header>
  );
};

export default CTLayoutDashboardHeader;
