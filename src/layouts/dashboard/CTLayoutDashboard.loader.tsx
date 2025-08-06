import { Layout, Skeleton } from 'antd';

import '@/styles/scss/utils/_padding.scss';

import './CTLayoutDashboard.style.scss';
import './subcomponent/header/Header.style.scss';
import './subcomponent/sidebar/Sidebar.style.scss';

const { Content, Header, Sider } = Layout;

const CTLayoutDashboardLoader: React.FC = () => {
  return (
    <Layout className="ct_layout_dashboard">
      <Header className="ct_layout_dashboard__header">
        <Skeleton.Button
          rootClassName="ct_layout_dashboard__root_skeleton"
          style={{ width: 180 }}
        />

        <div style={{ marginLeft: 'auto', display: 'flex', gap: '0.5rem' }}>
          <Skeleton.Avatar rootClassName="ct_layout_dashboard__root_skeleton" />
          <Skeleton.Button
            rootClassName="ct_layout_dashboard__root_skeleton"
            style={{ width: 120 }}
          />
        </div>
      </Header>

      <Layout hasSider>
        <Sider
          className="ct_layout_dashboard__sidebar"
          style={{
            position: 'fixed',
            bottom: 0,
            top: 64,
            left: 0,
            overflow: 'auto',
          }}
          width={240}>
          <div className="p--3">
            <Skeleton.Button
              rootClassName="ct_layout_dashboard__root_skeleton mb--2"
              style={{ width: 150 }}
            />
            <Skeleton.Button
              rootClassName="ct_layout_dashboard__root_skeleton mb--2"
              style={{ width: 130 }}
            />
            <Skeleton.Button
              rootClassName="ct_layout_dashboard__root_skeleton mb--2"
              style={{ width: 165 }}
            />
          </div>
        </Sider>
        <Layout className="ct_layout_dashboard__inner ct_layout_dashboard__inner--expanded">
          <div
            style={{ display: 'flex', gap: '0.5rem' }}
            className="ct_layout_dashboard__breadcrumb">
            <Skeleton.Input
              rootClassName="ct_layout_dashboard__root_skeleton mb--2"
              size="small"
            />
            /
            <Skeleton.Input
              rootClassName="ct_layout_dashboard__root_skeleton mb--2"
              size="small"
            />
          </div>

          <Content className="ct_layout_dashboard__content">
            <Skeleton className="mb--6" />
            <Skeleton />
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default CTLayoutDashboardLoader;
