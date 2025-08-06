import { useMemo, useState } from 'react';

import { EyeInvisibleOutlined, EyeOutlined } from '@ant-design/icons';
import { Avatar, Button, Divider } from 'antd';
import { useNavigate, useParams } from 'react-router-dom';

import RouteEndpointsUsers from '@/constants/route-endpoint/things/users';
import { useGetSingleUser } from '@/hooks/api/things';
import { CTLayoutDashboard } from '@/layouts';
import { capitalize } from '@/utils/string.utils';

import '@/styles/scss/utils/_margin.scss';

import './UsersDetail.style.scss';
import { kUsersDetailPageMeta } from './UsersDetail.constant';

const UsersDetailPage: React.FC = () => {
  const [isShowPassword, setIsShowPassword] = useState<boolean>(false);
  const navigate = useNavigate();
  const params = useParams();
  const { data } = useGetSingleUser({ params: params.id });

  const password = useMemo(() => {
    if (!data?.password) return '-';
    return isShowPassword
      ? data?.password
      : data?.password.replace(/[\w\d\s]/g, '•');
  }, [data?.password, isShowPassword]);

  if (data?.name)
    kUsersDetailPageMeta.titlePage = `${data?.name} - User || Custom`;

  return (
    <CTLayoutDashboard
      actionButtonProps={[
        {
          children: 'Edit User',
          onClick: () => {
            navigate(
              RouteEndpointsUsers.BASE_USERS +
                '/' +
                RouteEndpointsUsers.EDIT_USER.replace(':id', params.id || '')
            );
          },
        },
      ]}
      titlePage={
        <div className="ct_users_detail__header">
          <Avatar size={60} src={data?.avatar} />
          <div>
            <h1>{data?.name || '-'}</h1>
            <p>{data?.email || '-'}</p>
          </div>
        </div>
      }
      meta={kUsersDetailPageMeta}>
      <h2>Detailed Information</h2>
      <Divider className="my--2" />

      <h3 className="ct_users_detail__label">Full Name</h3>
      <p className="ct_users_detail__value">{data?.name || '-'}</p>

      <h3 className="ct_users_detail__label">Email</h3>
      <p className="ct_users_detail__value">{data?.email || '-'}</p>

      <h3 className="ct_users_detail__label">Role</h3>
      <p className="ct_users_detail__value">{capitalize(data?.role || '-')}</p>

      <h3 className="ct_users_detail__label">
        Password{' '}
        <Button
          style={{ padding: 0, paddingInline: 4, marginLeft: 4 }}
          size="small"
          type="link"
          onClick={() => setIsShowPassword((prev) => !prev)}>
          {isShowPassword ? <EyeInvisibleOutlined /> : <EyeOutlined />}
        </Button>
      </h3>
      <p className="ct_users_detail__value">{password}</p>
    </CTLayoutDashboard>
  );
};

export default UsersDetailPage;
