import { useEffect } from 'react';

import { Button, Form, Input, message } from 'antd';
import { Link, useNavigate } from 'react-router-dom';

import { CTForm } from '@/components';
import customService from '@/configs/common/service.config';
import {
  RouteEndpointsAuth,
  RouteEndpointsCommon,
} from '@/constants/route-endpoint';
import { useLogin } from '@/hooks/api/auth';
import { CTLayoutAuth } from '@/layouts';
import { useAuthStore } from '@/stores/auth';

import {
  kLoginFormField,
  kLoginFormRules,
  kLoginPageMeta,
} from './Login.constant';
import type { TloginFormValue } from './Login.type';

import '@/styles/scss/utils/_padding.scss';
import './Login.style.scss';

const LoginPage: React.FC = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const updateIsAuthenticated = useAuthStore(
    (state) => state.updateIsAuthenticated
  );

  const { mutate, data, isPending: isLoading, error, isSuccess } = useLogin();
  useEffect(() => {
    if (isSuccess) {
      customService.setCredential({
        accessToken: data.access_token,
        refreshToken: data.refresh_token,
      });
      updateIsAuthenticated(true);
      navigate(RouteEndpointsCommon.HOME, { replace: true });
      message.open({ content: 'Login successful.', type: 'success' });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSuccess, data]);
  useEffect(() => {
    if (error) {
      message.open({ content: error.message, type: 'error' });
      if (error?.statusCode === 401) {
        form.setFields([
          { name: kLoginFormField.EMAIL, errors: [''] },
          {
            name: kLoginFormField.PASSWORD,
            errors: ["Email and Password don't match"],
          },
        ]);
        return;
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [error]);

  const handleSubmit = (value: TloginFormValue) => {
    mutate(value);
  };

  return (
    <CTLayoutAuth
      title="Login Company"
      subtitle="Let's authenticate yourself before continue."
      meta={kLoginPageMeta}>
      <CTForm
        form={form}
        onFinish={handleSubmit}
        className="ct_login_page__form">
        <Form.Item
          name={kLoginFormField.EMAIL}
          className="mb--1"
          rules={kLoginFormRules.email}>
          <Input placeholder="Email" />
        </Form.Item>
        <Form.Item
          name={kLoginFormField.PASSWORD}
          className="mb--2"
          rules={kLoginFormRules.password}>
          <Input.Password placeholder="Password" />
        </Form.Item>
        <Form.Item className="mb--2">
          <Link
            className="px--0"
            to={RouteEndpointsAuth.FORGOT_PASSWORD}
            style={{ fontWeight: 600 }}>
            Forgot Password
          </Link>
        </Form.Item>
        <Form.Item className="mb--1">
          <Button type="primary" block htmlType="submit" loading={isLoading}>
            Login
          </Button>
        </Form.Item>
        <Form.Item noStyle>
          <Link to={RouteEndpointsAuth.REGISTER}>
            <Button type="primary" ghost block disabled={isLoading}>
              Register
            </Button>
          </Link>
        </Form.Item>
      </CTForm>
    </CTLayoutAuth>
  );
};

export default LoginPage;
