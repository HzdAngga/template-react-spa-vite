import { EditOutlined, MoreOutlined, ProfileOutlined } from '@ant-design/icons';
import { Button, Dropdown, Table, type TableColumnsType } from 'antd';
import dayjs from 'dayjs';
import { useNavigate } from 'react-router-dom';

import RouteEndpointsUsers from '@/constants/route-endpoint/things/users';
import { useGetAllUsers } from '@/hooks/api/things';
import { CTLayoutDashboard } from '@/layouts';
import { TGetAllUsersResponse } from '@/types/api/things';
import { capitalize } from '@/utils/string.utils';

import { kUsersPageMeta } from './Users.constant';

const UsersPage: React.FC = () => {
  const navigate = useNavigate();
  const { data, isLoading } = useGetAllUsers();

  const columns: TableColumnsType<TGetAllUsersResponse> = [
    {
      key: 'name',
      title: 'Name',
      dataIndex: 'name',
      fixed: 'left',
      width: 240,
    },
    { key: 'email', title: 'Email', dataIndex: 'email' },
    {
      key: 'role',
      title: 'Role',
      dataIndex: 'role',
      render: (value) => {
        return <>{capitalize(value)}</>;
      },
    },
    {
      key: 'creationAt',
      title: 'Created Date',
      dataIndex: 'creationAt',
      render: (value) => {
        return <>{dayjs(value).format('YYYY-MM-DD')}</>;
      },
    },
    {
      key: 'id',
      width: 92,
      fixed: 'right',
      align: 'center',
      dataIndex: 'id',
      render: (value) => {
        return (
          <Dropdown
            trigger={['click']}
            placement="bottomRight"
            menu={{
              items: [
                {
                  key: 'EDIT',
                  title: 'Edit',
                  label: <>Edit</>,
                  icon: <EditOutlined />,
                  onClick: () =>
                    navigate(
                      RouteEndpointsUsers.EDIT_USER.replace(':id', value)
                    ),
                },
                {
                  key: 'DETAIL',
                  title: 'Detail',
                  label: <>Detail</>,
                  icon: <ProfileOutlined />,
                  onClick: () =>
                    navigate(
                      RouteEndpointsUsers.DETAIL_USER.replace(':id', value)
                    ),
                },
              ],
            }}>
            <Button type="link">
              <MoreOutlined />
            </Button>
          </Dropdown>
        );
      },
    },
  ];

  return (
    <CTLayoutDashboard
      meta={kUsersPageMeta}
      actionButtonProps={[
        {
          children: 'Add User',
          onClick: () => {
            navigate(RouteEndpointsUsers.ADD_USER);
          },
        },
      ]}
      titlePage="Users">
      <Table
        pagination={{ hideOnSinglePage: true }}
        loading={isLoading}
        columns={columns}
        rowKey="id"
        dataSource={data}
        scroll={{ x: 'max-content' }}
      />
    </CTLayoutDashboard>
  );
};

export default UsersPage;
